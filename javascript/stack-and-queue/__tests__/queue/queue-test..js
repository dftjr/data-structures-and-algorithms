'use strict';

const Queue = require('../../Queue/index.js');
const que = new Queue();

// CODE CHALLENGE 10
describe('Testing the Queue methods', () => {
  test('Can successfully enqueue into a queue', () => {
    que.enqueue(1);
    expect(que.front.value).toEqual(1);
  });
  test('Can successfully enqueue multiple values into a queue', () => {
    que.enqueue(2);
    que.enqueue(3);
    expect(que.front.value).toEqual(1);
    expect(que.front.next.value).toEqual(2);
    expect(que.front.next.next.value).toEqual(3);
  });
  test('Can successfully dequeue out of a queue the expected value', () => {
    que.dequeue();
    expect(que.front.value).toEqual(2);
  });
  test('Can successfully peek into a queue, seeing the expected value', () => {
    que.peek();
    expect(que.front.value).toEqual(2);
  });
  test('Can successfully empty a queue after multiple dequeues', () => {
    que.dequeue();
    que.dequeue();
    expect(que.isEmpty()).toBeTruthy();
  });
  test('Can successfully instantiate an empty queue', () => {
    que.isEmpty()
    expect(que.isEmpty()).toBeTruthy();
  });
  test('Calling dequeue or peek on empty queue raises exception', () => {
    expect(() => {que.dequeue()}).toThrow('Error, no value found');
    expect(() => {que.peek()}).toThrow('Error, no value found');
  });
});
