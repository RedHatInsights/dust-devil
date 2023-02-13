import { describe, expect, it } from '@jest/globals';
import { ts } from '../hello';

describe('Hello', () => {
  it('returns hello', () => {
    expect('Hello, TS!').toEqual(ts());
  });
});
