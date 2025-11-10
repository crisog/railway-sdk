import { describe, expect, test } from 'bun:test';
import { err, ok } from 'neverthrow';

import { GraphQLRequestError } from './errors';
import { ResponseFieldError, unwrapArray, unwrapField, unwrapNested } from './response';

describe('response helpers', () => {
  test('unwrapField returns requested field for Ok results', () => {
    const base = ok({ deployment: { id: 'dep_1' } });
    const result = unwrapField(base, 'deployment');

    expect(result.isOk()).toBe(true);
    if (result.isErr()) {
      throw result.error;
    }

    expect(result.value.id).toBe('dep_1');
  });

  test('unwrapField preserves original error', () => {
    const error = new GraphQLRequestError('boom');
    const base = err(error);
    const result = unwrapField(base, 'deployment');

    expect(result.isErr()).toBe(true);
    if (result.isOk()) {
      throw new Error('Expected unwrapField to propagate Err');
    }

    expect(result.error).toBe(error);
  });

  test('unwrapArray validates arrays', () => {
    const base = ok({ projects: [{ id: 'proj_1' }] });
    const result = unwrapArray(base, 'projects');

    expect(result.isOk()).toBe(true);
    if (result.isErr()) {
      throw result.error;
    }

    expect(result.value).toHaveLength(1);
  });

  test('unwrapNested reports missing paths', () => {
    const base = ok({ deployment: { service: null } });
    const result = unwrapNested(base, ['deployment', 'service', 'name']);

    expect(result.isErr()).toBe(true);
    if (result.isOk()) {
      throw new Error('Expected missing path');
    }

    expect(result.error).toBeInstanceOf(ResponseFieldError);
  });
});
