import { promises as fs } from 'fs';
import path from 'path';
import {
  buildClientSchema,
  GraphQLSchema,
  IntrospectionQuery,
  parse,
  validate,
} from 'graphql';

interface GraphQLCollection {
  item?: CollectionGroup[];
}

interface CollectionGroup {
  name?: string;
  item?: CollectionEntry[];
}

interface CollectionEntry {
  name?: string;
  description?: string;
  request?: {
    body?: {
      mode?: string;
      graphql?: {
        query?: string;
        variables?: string;
      };
    };
  };
}

interface CliOptions {
  collectionPath: string;
  outputRoot: string;
  only?: Set<string>;
  force: boolean;
  schemaPath?: string;
  validate: boolean;
}

const DEFAULT_COLLECTION_PATH = path.resolve(process.cwd(), 'railway_graphql_collection.json');
const DEFAULT_OUTPUT_ROOT = path.resolve(process.cwd(), 'src/graphql');
const DEFAULT_SCHEMA_PATH = path.resolve(process.cwd(), 'schema/railway-introspection.json');

const usage = `Usage: bun scripts/generate-operations.ts [options]

Options:
  --collection=<path>   Path to the Railway GraphQL collection JSON file (default: railway_graphql_collection.json)
  --output=<dir>        Output directory for generated .graphql files (default: src/graphql)
  --only=<names>        Comma-separated list of operation names to emit
  --schema=<path>       Path to an introspection JSON file for validation (default: schema/railway-introspection.json)
  --no-validate         Skip validation against the introspection schema
  --force               Overwrite existing files
  --help                Show this help text
`;

const parseArgs = (): CliOptions => {
  const args = process.argv.slice(2);
  const options: CliOptions = {
    collectionPath: DEFAULT_COLLECTION_PATH,
    outputRoot: DEFAULT_OUTPUT_ROOT,
    force: false,
    schemaPath: DEFAULT_SCHEMA_PATH,
    validate: true,
  };

  for (const arg of args) {
    if (arg === '--help') {
      // eslint-disable-next-line no-console
      console.log(usage);
      process.exit(0);
    } else if (arg.startsWith('--collection=')) {
      const value = arg.slice('--collection='.length);
      options.collectionPath = path.resolve(process.cwd(), value);
    } else if (arg.startsWith('--output=')) {
      const value = arg.slice('--output='.length);
      options.outputRoot = path.resolve(process.cwd(), value);
    } else if (arg.startsWith('--only=')) {
      const value = arg.slice('--only='.length);
      const names = value
        .split(',')
        .map((name) => name.trim())
        .filter(Boolean);
      if (names.length > 0) {
        options.only = new Set(names);
      }
    } else if (arg.startsWith('--schema=')) {
      const value = arg.slice('--schema='.length);
      options.schemaPath = path.resolve(process.cwd(), value);
    } else if (arg === '--no-validate') {
      options.validate = false;
    } else if (arg === '--force') {
      options.force = true;
    } else {
      // eslint-disable-next-line no-console
      console.warn(`Unknown argument: ${arg}`);
    }
  }

  return options;
};

const sanitizeFileName = (name: string): string =>
  name.replace(/[^A-Za-z0-9_-]+/g, '_').replace(/^_+|_+$/g, '');

const getCategoryDirectory = (groupName: string | undefined): string | null => {
  if (!groupName) {
    return null;
  }

  const normalized = groupName.trim().toLowerCase();

  if (normalized.startsWith('mutation')) {
    return 'mutations';
  }

  if (normalized.startsWith('query') || normalized.startsWith('queri')) {
    return 'queries';
  }

  return null;
};

const isGraphQLEntry = (entry: CollectionEntry): boolean =>
  Boolean(entry.request?.body?.mode === 'graphql' && entry.request.body.graphql?.query);

const resolveDescription = (entry: CollectionEntry): string | undefined =>
  entry.description ?? (entry.request as { description?: string } | undefined)?.description;

const prependDescription = (description: string | undefined, query: string): string => {
  if (!description) {
    return `${query.trim()}\n`;
  }

  const cleanedDescription = description.trim();

  if (!cleanedDescription) {
    return `${query.trim()}\n`;
  }

  const comment = cleanedDescription
    .split('\n')
    .map((line) => `# ${line.trim()}`)
    .join('\n');

  return `${comment}\n${query.trim()}\n`;
};

const loadSchema = async (options: CliOptions): Promise<GraphQLSchema | null> => {
  if (!options.validate) {
    return null;
  }

  const schemaPath = options.schemaPath ?? DEFAULT_SCHEMA_PATH;

  try {
    const raw = await fs.readFile(schemaPath, 'utf8');
    const json = JSON.parse(raw) as IntrospectionQuery | { data?: IntrospectionQuery };
    const introspection: IntrospectionQuery =
      'data' in json && json.data ? (json.data as IntrospectionQuery) : (json as IntrospectionQuery);

    if (!introspection.__schema) {
      throw new Error('Introspection JSON missing __schema property.');
    }

    return buildClientSchema(introspection);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(
      `Could not load schema from ${schemaPath}. Skipping validation. Reason: ${(error as Error).message}`,
    );
    return null;
  }
};

const removeIfExists = async (filePath: string): Promise<void> => {
  try {
    await fs.unlink(filePath);
  } catch {
    // ignore
  }
};

async function main(): Promise<void> {
  const options = parseArgs();
  const raw = await fs.readFile(options.collectionPath, 'utf8');
  const collection = JSON.parse(raw) as GraphQLCollection;
  const schema = await loadSchema(options);

  if (!Array.isArray(collection.item)) {
    throw new Error(`Collection at ${options.collectionPath} does not contain an item array.`);
  }

  await fs.mkdir(options.outputRoot, { recursive: true });

  for (const group of collection.item) {
    const targetDirName = getCategoryDirectory(group.name);

    if (!targetDirName || !Array.isArray(group.item)) {
      continue;
    }

    const targetDir = path.join(options.outputRoot, targetDirName);
    await fs.mkdir(targetDir, { recursive: true });

    for (const entry of group.item) {
      const operationName = entry.name?.trim();

      if (!operationName || !isGraphQLEntry(entry)) {
        continue;
      }

      if (options.only && !options.only.has(operationName)) {
        continue;
      }

      const fileName = `${sanitizeFileName(operationName)}.graphql`;
      const filePath = path.join(targetDir, fileName);

      if (!options.force) {
        try {
          await fs.access(filePath);
          // eslint-disable-next-line no-console
          console.log(`Skipping existing operation: ${path.relative(process.cwd(), filePath)}`);
          continue;
        } catch {
          // file does not exist, continue
        }
      }

      const query = entry.request?.body?.graphql?.query;

      if (!query) {
        continue;
      }

      if (schema) {
        try {
          const documentNode = parse(query);
          const validationErrors = validate(schema, documentNode);
          if (validationErrors.length > 0) {
            const reasons = validationErrors.map((error) => error.message).join('; ');
            // eslint-disable-next-line no-console
            console.warn(
              `Skipping invalid operation ${operationName}: ${reasons}`,
            );
            if (options.force) {
              await removeIfExists(filePath);
            }
            continue;
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.warn(
            `Skipping unparsable operation ${operationName}: ${(error as Error).message}`,
          );
          if (options.force) {
            await removeIfExists(filePath);
          }
          continue;
        }
      }

      const description = resolveDescription(entry);
      const fileContents = prependDescription(description, query);
      await fs.writeFile(filePath, fileContents, 'utf8');
      // eslint-disable-next-line no-console
      console.log(`Wrote ${path.relative(process.cwd(), filePath)}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
