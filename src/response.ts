import { err, ok, type Result } from 'neverthrow';
import type { FlattenGraphQLResponse } from './flatten.js';

export class ResponseFieldError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ResponseFieldError';
  }
}

export const unwrapField = <
  TData extends Record<string, unknown>,
  TKey extends keyof TData,
  TError extends Error,
  TField = TData[TKey],
>(
  result: Result<TData, TError>,
  fieldName: TKey,
  errorMessage?: string,
): Result<TField, TError | ResponseFieldError> => {
  if (result.isErr()) {
    return err(result.error);
  }

  const data = result.value;
  const key = String(fieldName);

  if (!isRecord(data) || !(fieldName in data)) {
    return err(
      new ResponseFieldError(errorMessage ?? `Field '${key}' not found in response data.`),
    );
  }

  const fieldValue = data[fieldName];

  if (fieldValue == null) {
    return err(
      new ResponseFieldError(
        errorMessage ?? `Field '${key}' was null or undefined in response data.`,
      ),
    );
  }

  return ok(fieldValue as TField);
};

export const unwrapArray = <
  TData extends Record<string, unknown>,
  TKey extends keyof TData,
  TError extends Error,
  TItem = TData[TKey] extends (infer Item)[] ? Item : never,
>(
  result: Result<TData, TError>,
  fieldName: TKey,
  errorMessage?: string,
): Result<TItem[], TError | ResponseFieldError> => {
  if (result.isErr()) {
    return err(result.error);
  }

  const key = String(fieldName);
  const data = result.value;

  if (!isRecord(data) || !(fieldName in data)) {
    return err(
      new ResponseFieldError(errorMessage ?? `Field '${key}' not found in response data.`),
    );
  }

  const fieldValue = data[fieldName];

  if (!Array.isArray(fieldValue)) {
    return err(
      new ResponseFieldError(errorMessage ?? `Field '${key}' is not an array in response data.`),
    );
  }

  return ok(fieldValue as TItem[]);
};

// Helper to get a key from FlattenGraphQLResponse
// Accesses T[K] directly to preserve intersection types (e.g., Service[] & { pageInfo: PageInfo })
type GetFlattenKey<T, K extends string> =
  T extends FlattenGraphQLResponse<infer U>
    ? K extends keyof U
      ? K extends keyof T
        ? T[K]
        : never
      : K extends keyof T
        ? T[K]
        : never
    : K extends keyof T
      ? T[K]
      : never;

type NestedPathType<
  TData extends Record<string, unknown>,
  TPath extends readonly string[],
> = TPath extends readonly []
  ? TData
  : TPath extends readonly [infer First, ...infer Rest]
    ? First extends string
      ? Rest extends readonly string[]
        ? GetFlattenKey<TData, First> extends Record<string, unknown>
          ? NestedPathType<GetFlattenKey<TData, First>, Rest>
          : GetFlattenKey<TData, First>
        : GetFlattenKey<TData, First>
      : never
    : never;

export const unwrapNested = <
  TData extends Record<string, unknown>,
  TPath extends readonly string[],
  TError extends Error,
>(
  result: Result<TData, TError>,
  path: TPath,
  errorMessage?: string,
): Result<NestedPathType<TData, TPath>, TError | ResponseFieldError> => {
  if (result.isErr()) {
    return err(result.error);
  }

  let current: unknown = result.value;

  for (const segment of path) {
    if (!isRecord(current) || !(segment in current)) {
      return err(
        new ResponseFieldError(
          errorMessage ?? `Path '${path.join('.')}' not found in response data.`,
        ),
      );
    }

    current = (current as Record<string, unknown>)[segment];
  }

  if (current == null) {
    return err(
      new ResponseFieldError(
        errorMessage ?? `Path '${path.join('.')}' resolved to null or undefined.`,
      ),
    );
  }

  return ok(current as NestedPathType<TData, TPath>);
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;
