'use strict';

const LinkedList = require('../index.js');
const ll = new LinkedList();
ll.insert(1);
ll.insert(2);
const ll2 = new LinkedList();
ll2.insert(3);
ll2.insert(4);
const newL3 = new LinkedList();

// CODE CHALLENGE 08
describe('Testing the Linked List zip method', () => {
  test('Should merge both of the Linked Lists together', () => {
    newL3.zipLists(ll, ll2);
    expect(newL3.toString()).toEqual('{2} -> {4} -> {3} -> {1} -> NULL');
  });
});
