import { describe, expect, it } from '@jest/globals';
import { hello } from '../hello';

describe('Hello', () => {
  it('returns hello', () => {
    expect('Hello, test!').toEqual(hello('test'));
  });
});
