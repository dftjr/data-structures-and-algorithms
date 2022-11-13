'use strict'

const validateBrackets = require ('../../validateBrackets/index');
let testString1 = '{}';
let testString2 = '{}(){}';
let testString3 = '()[[Extra Characters]]';
let testString4 = '(){}[[]]';
let testString5 = '{}{Code}Fellows](())';
let testString6 = '[({)}';
let testString7 = '(](';
let testString8 = '{(})';

describe('Testing validate brackets function', () => {
  test('Parentheses closed', () => {
    validateBrackets(testString1)
    expect(testString1).toBeTruthy;
  });
  test('All three typers of brackets closed', () => {
    validateBrackets(testString2)
    expect(testString2).toBeTruthy;
  });
  test('Closed brackets with words', () => {
    validateBrackets(testString3)
    expect(testString3).toBeTruthy;
  });
  test('Can successfully push onto a stack', () => {
    validateBrackets(testString4)
    expect(testString4).toBeTruthy;
  });
  test('Broken brackets with words', () => {
    validateBrackets(testString5)
    expect(testString5).toBeTruthy;
  });
  test('Broken square bracket', () => {
    validateBrackets(testString6)
    expect(testString6).toBeFalsy;
  });
  test('Broken Parentheses', () => {
    validateBrackets(testString7)
    expect(testString7).toBeFalsy;
  });
  test('Broken curly bracket', () => {
    validateBrackets(testString8)
    expect(testString8).toBeFalsy;
  });
});
