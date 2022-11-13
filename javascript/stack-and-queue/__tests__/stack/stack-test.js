'use strict';

const Stack = require('../../Stack/index.js');
const stk = new Stack();

// CODE CHALLENGE 10
describe('Testing the Stack methods', () => {
  test('Can successfully push onto a stack', () => {
    stk.push(1);
    expect(stk.top.value).toEqual(1);
    console.log(stk)
  });
  test('Can successfully push multiple values onto a stack', () => {
    stk.push(2);
    stk.push(3);
    expect(stk.top.value).toEqual(3);
    expect(stk.top.next.value).toEqual(2);
    expect(stk.top.next.next.value).toEqual(1);
  });
  test('Can successfully peek the next item on the stack', () => {
    stk.peek();
    expect(stk.top.value).toEqual(3);
  });
  test('Can successfully empty a stack after multiple pops', () => {
    stk.pop();
    stk.pop();
    stk.pop();
    expect(stk.top).toEqual(null);
  });
  test('Can successfully instantiate an empty stack', () => {
    stk.isEmpty()
    expect(stk.isEmpty()).toBeTruthy();
  });
  test('Calling pop or peek on empty stack raises exception', () => {
    expect(() => {stk.pop()}).toThrow('Error, no value found');
    expect(() => {stk.peek()}).toThrow('Error, no value found');
  });
});
