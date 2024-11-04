const { test, expect } = require('@jest/globals');
const lib = require('./lib');

test('avg([1, 2, 3, 4, 5]) should return 3', () => {
    expect(lib.avg([1, 2, 3, 4, 5])).toBe(3); 
  });

// test prime function
test('prime(7) should return true', () => {
  expect(lib.prime(7)).toBe(true); // 7 is prime->true
});

test('prime(10) should return false', () => {
  expect(lib.prime(10)).toBe(false); // 10 is not prime->false
});

// test factorial function
test('factorial(5) should return 120', () => {
  expect(lib.factorial(5)).toBe(120); // 5! = 120
});

test('factorial(0) should return 1', () => {
  expect(lib.factorial(0)).toBe(1); // 0! = 1
});
