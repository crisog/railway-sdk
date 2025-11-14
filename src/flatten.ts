type NonNullableValue<T> = T extends null | undefined ? never : T;

type StripConnectionKeys<T> = T extends object ? Omit<T, 'edges' | 'nodes'> : never;

type EdgeNode<T> = T extends { edges?: readonly (infer Edge)[] | null }
  ? Edge extends { node?: infer Node }
    ? Node
    : never
  : never;

type NodesArray<T> = T extends { nodes?: readonly (infer Node)[] | null } ? Node : never;

type ConnectionNode<T> = [EdgeNode<T>] extends [never] ? NodesArray<T> : EdgeNode<T>;

export type FlattenGraphQLResponse<T> = [T] extends [null | undefined]
  ? T
  : T extends readonly (infer Item)[]
    ? FlattenGraphQLResponse<Item>[]
    : T extends object
      ? [ConnectionNode<T>] extends [never]
        ? { [K in keyof T]: FlattenGraphQLResponse<T[K]> }
        : FlattenGraphQLResponse<ConnectionNode<T>>[] & {
            [K in keyof StripConnectionKeys<T>]: FlattenGraphQLResponse<StripConnectionKeys<T>[K]>;
          }
      : T;

type ConnectionLikeRecord = {
  edges?: unknown;
  nodes?: unknown;
} & Record<string, unknown>;

export const flattenGraphQLResponse = <T>(value: T): FlattenGraphQLResponse<T> =>
  flattenValue(value) as FlattenGraphQLResponse<T>;

const flattenValue = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    return value.map((item) => flattenValue(item));
  }

  if (isConnectionRecord(value)) {
    const flattenedNodes = extractNodes(value).map((node) => flattenValue(node));
    const extrasEntries = Object.entries(value).filter(
      ([key]) => key !== 'edges' && key !== 'nodes',
    );

    const flattenedExtras = Object.fromEntries(
      extrasEntries.map(([key, entryValue]) => [key, flattenValue(entryValue)]),
    );

    return Object.assign(flattenedNodes, flattenedExtras);
  }

  if (isRecord(value)) {
    const flattenedEntries = Object.entries(value).map(([key, entryValue]) => [
      key,
      flattenValue(entryValue),
    ]);

    return Object.fromEntries(flattenedEntries);
  }

  return value;
};

const extractNodes = (record: ConnectionLikeRecord): NonNullableValue<unknown>[] => {
  if (Array.isArray(record['edges'])) {
    const nodes: NonNullableValue<unknown>[] = [];

    for (const edge of record['edges']) {
      if (!isRecord(edge)) {
        continue;
      }

      const node = edge['node'];
      if (node == null) {
        continue;
      }

      nodes.push(node as NonNullableValue<unknown>);
    }

    return nodes;
  }

  if (Array.isArray(record['nodes'])) {
    return record['nodes'].filter((node): node is NonNullableValue<unknown> => node != null);
  }

  return [];
};

const isConnectionRecord = (value: unknown): value is ConnectionLikeRecord => {
  if (!isRecord(value)) {
    return false;
  }

  if (Array.isArray(value['edges'])) {
    return true;
  }

  if (Array.isArray(value['nodes'])) {
    return true;
  }

  return false;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;
