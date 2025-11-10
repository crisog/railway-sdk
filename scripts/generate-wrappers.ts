import { promises as fs } from 'fs';
import path from 'path';
import { parse, type OperationDefinitionNode, type VariableDefinitionNode } from 'graphql';

interface OperationMeta {
  name: string;
  operationType: 'query' | 'mutation' | 'subscription';
  functionName: string;
  documentName: string;
  dataTypeName: string;
  variablesTypeName?: string;
  hasVariables: boolean;
  hasRequiredVariables: boolean;
  description?: string;
  sourcePath: string;
}

const GRAPHQL_ROOT = path.resolve(process.cwd(), 'src/graphql');
const OUTPUT_PATH = path.resolve(process.cwd(), 'src/generated/operations.ts');

const collectGraphQLFiles = async (directory: string): Promise<string[]> => {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      const nested = await collectGraphQLFiles(entryPath);
      files.push(...nested);
    } else if (entry.isFile() && entry.name.endsWith('.graphql')) {
      files.push(entryPath);
    }
  }

  return files;
};

const readOperation = async (filePath: string): Promise<OperationMeta | null> => {
  const contents = await fs.readFile(filePath, 'utf8');
  const document = parse(contents);
  const definition = document.definitions.find(
    (def): def is OperationDefinitionNode => def.kind === 'OperationDefinition',
  );

  if (!definition || !definition.name || !definition.operation) {
    return null;
  }

  const name = definition.name.value;
  const pascalName = toPascal(name);
  const operationType = definition.operation;
  const functionName = toCamel(name);
  const operationSuffix = getOperationSuffix(operationType);
  const documentName = `${pascalName}Document`;
  const dataTypeName = `${pascalName}${operationSuffix}`;
  const variablesTypeName = definition.variableDefinitions?.length
    ? `${pascalName}${operationSuffix}Variables`
    : undefined;

  const hasVariables = Boolean(definition.variableDefinitions?.length);
  const hasRequiredVariables = Boolean(
    definition.variableDefinitions?.some((variable) => isVariableRequired(variable)),
  );

  const description = extractLeadingComment(contents);

  return {
    name,
    operationType,
    functionName,
    documentName,
    dataTypeName,
    variablesTypeName,
    hasVariables,
    hasRequiredVariables,
    description,
    sourcePath: path.relative(process.cwd(), filePath),
  };
};

const toCamel = (name: string): string => name.charAt(0).toLowerCase() + name.slice(1);

const toPascal = (name: string): string =>
  name
    .replace(/(^\w|[_-]\w)/g, (match) => match.replace(/[_-]/, '').toUpperCase())
    .replace(/^\d/, (digit) => `_${digit}`);

const getOperationSuffix = (operation: OperationDefinitionNode['operation']): string => {
  switch (operation) {
    case 'query':
      return 'Query';
    case 'mutation':
      return 'Mutation';
    case 'subscription':
      return 'Subscription';
    default:
      return '';
  }
};

const isVariableRequired = (variable: VariableDefinitionNode): boolean =>
  variable.type.kind === 'NonNullType' && variable.defaultValue == null;

const extractLeadingComment = (contents: string): string | undefined => {
  const lines = contents.split('\n');
  const commentLines: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (!trimmed) {
      continue;
    }

    if (trimmed.startsWith('#')) {
      commentLines.push(trimmed.replace(/^#\s?/, '').trim());
      continue;
    }

    break;
  }

  if (commentLines.length === 0) {
    return undefined;
  }

  return commentLines.join(' ');
};

const generateFile = async (operations: OperationMeta[]): Promise<void> => {
  const sorted = operations.sort((a, b) => a.name.localeCompare(b.name));

  const documentImports = new Set<string>();
  const dataTypeImports = new Set<string>();
  const variableTypeImports = new Set<string>();

  for (const op of sorted) {
    documentImports.add(op.documentName);
    dataTypeImports.add(op.dataTypeName);
    if (op.variablesTypeName) {
      variableTypeImports.add(op.variablesTypeName);
    }
  }

  const header = [
    `import { RailwayClient } from '../client';`,
    `import type { GraphQLDocumentRequestOptions } from '../types';`,
    `import type { ResultAsync } from 'neverthrow';`,
    `import type { GraphQLRequestError } from '../errors';`,
    `import {`,
    ...Array.from(documentImports).map((name) => `  ${name},`),
    ...Array.from(new Set<string>([...dataTypeImports, ...variableTypeImports])).map(
      (typeName) => `  type ${typeName},`,
    ),
    `} from './graphql';`,
    '',
  ].join('\n');

  const body = sorted
    .map((op) => {
      const lines: string[] = [];

      if (op.description) {
        lines.push(`/** ${op.description} */`);
      }

      const params = buildParameters(op);
      const call = buildCallExpression(op);
      const returnType = buildReturnType(op);
      lines.push(`export const ${op.functionName} = (${params}): ${returnType} => ${call};`);
      return lines.join('\n');
    })
    .join('\n\n');

  const contents = `${header}${body}\n`;
  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, contents, 'utf8');
  console.log(`Wrote ${path.relative(process.cwd(), OUTPUT_PATH)}`);
};

const buildParameters = (operation: OperationMeta): string => {
  const base = 'client: RailwayClient';
  const optionsType = 'GraphQLDocumentRequestOptions';

  if (!operation.hasVariables) {
    return `${base}, request?: { options?: ${optionsType} }`;
  }

  const payloadType = `{ variables${operation.hasRequiredVariables ? '' : '?'}: ${operation.variablesTypeName}; options?: ${optionsType} }`;

  const requestParam = operation.hasRequiredVariables
    ? `request: ${payloadType}`
    : `request?: ${payloadType}`;

  return `${base}, ${requestParam}`;
};

const buildCallExpression = (operation: OperationMeta): string => {
  const baseCall = `client.requestDocument(${operation.documentName}`;

  if (!operation.hasVariables) {
    return `${baseCall}, undefined, request?.options)`;
  }

  if (operation.hasRequiredVariables) {
    return `${baseCall}, request.variables, request?.options)`;
  }

  return `${baseCall}, request?.variables, request?.options)`;
};

const buildReturnType = (operation: OperationMeta): string =>
  `ResultAsync<${operation.dataTypeName}, GraphQLRequestError>`;

async function main(): Promise<void> {
  const files = await collectGraphQLFiles(GRAPHQL_ROOT);
  const operations: OperationMeta[] = [];

  for (const file of files) {
    const operation = await readOperation(file);

    if (!operation) {
      continue;
    }

    operations.push(operation);
  }

  if (operations.length === 0) {
    throw new Error(`No operations found under ${GRAPHQL_ROOT}`);
  }

  await generateFile(operations);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
