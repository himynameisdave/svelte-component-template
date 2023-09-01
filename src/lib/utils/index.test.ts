import { describe, it, expect } from 'vitest';
import { FOO } from '../constants.js';
import { getFoo } from './index.js';

describe('getFoo', () => {
  it('returns FOO', () => {
    expect(getFoo()).toBe(FOO);
  });
});
