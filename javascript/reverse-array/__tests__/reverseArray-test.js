'use strict';

const reverseArray = require('../reverseArray');

const str1 = ["A", "B", "C", "D", "E", "F"];
const num1 = [1, 2, 3, 4, 5, 6];
const num2 = [89, 2354, 3546, 23, 10, -923, 823, -12];

describe('Testing the reverse-array function', () => {
  test('Can successfully reverse a int array', () => {
    expect(reverseArray(num1)).toEqual([6, 5, 4, 3, 2, 1]);
  });
  test('Can successfully reverse a int array with negatives', () => {
    expect(reverseArray(num2)).toEqual([-12, 823, -923, 10, 23, 3546, 2354, 89]);
  });
  test('Can successfully reverse a str array', () => {
    expect(reverseArray(str1)).toEqual(["F", "E", "D", "C", "B", "A"]);
  });
});
