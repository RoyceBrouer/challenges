import { add, subtract, multiply, divide } from "./index.js";

test("return the sum from two arguments a and b, if 4 and 5 = 9", () => {
  const result = add(4, 5);
  expect(result).toBe(9);
});

test("substracts argument b from argument a", () => {
  const result = subtract(5, 4);
  expect(result).toBe(1);
});

test("multiply a with b, if calles with 2 and 3 return 6", () => {
  const result = multiply(2, 3);
  expect(result).toBe(6);
});

test("divides a through be, if a = 10 and b = 2 returns 5", () => {
  const result = divide(10, 2);
  expect(result).toBe(5);
});
