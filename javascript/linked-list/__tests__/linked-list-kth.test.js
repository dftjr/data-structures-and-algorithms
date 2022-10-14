'use strict';

const LinkedList = require('../index.js');
const ll = new LinkedList();
ll.insert(1);

// CODE CHALLENGE 07
describe('Testing the Linked List kth method', () => {
  test('Where k is greater than the length of the linked list', () => {
    let k = ll.kthFromEnd(2)
    expect(k).toBeFalsy();
  });
  test('Where k and the length of the list are the same', () => {
    let k = ll.kthFromEnd(1)
    expect(k).toEqual(1);
  });
  test('Where k is not a positive integer', () => {
    console.log('Working on getting negative test to work');
  });
  test('Where the linked list is of a size 1', () => {
    let k = ll.kthFromEnd(1)
    expect(k).toEqual(1);
  });
  test('Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    ll.insert(2);
    ll.insert(3);
    let k = ll.kthFromEnd(2)
    expect(k).toEqual(2);
  });
});
