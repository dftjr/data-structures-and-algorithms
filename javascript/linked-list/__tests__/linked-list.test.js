'use strict';

const LinkedList = require('../LinkedList.js');
const ll = new LinkedList();

// CODE CHALLENGE 05
describe('Testing the Linked-List methods', () => {
  test('Can properly insert into the linked list', () => {
    ll.insert(1);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next).not.toBeTruthy();
  });
  test('Can properly insert multiple nodes into the linked list', () => {
    ll.insert(2);
    ll.insert(3);
    expect(ll.head.value).toEqual(3);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.next).not.toBeTruthy();
  });
  test('Will return true when finding a value within the linked list that exists', () => {
    ll.includes(3);
    let includesTest = ll.includes(3);
    expect(includesTest).toBeTruthy();
  });
  test('Will return false when searching for a value in the linked list that does not exist', () => {
    ll.includes(4);
    let includesTest = ll.includes(4);
    expect(includesTest).toBeFalsy();
  });
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let stringTest = ll.toString();
    expect(stringTest).toEqual('{3} -> {2} -> {1} -> NULL');
  });
});
