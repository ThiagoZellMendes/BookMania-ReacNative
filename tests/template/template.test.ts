import { it } from '@jest/globals';

function sum(a: any, b: any) {
  return a + b;
}

it('sums two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
