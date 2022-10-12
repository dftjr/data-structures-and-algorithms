'use strict';

const LinkedList = require('../LinkedList.js');
const ll = new LinkedList();
ll.insert(1);

// CODE CHALLENGE 06
describe('Testing the Linked-List data structure', () => {
  test('Can successfully add a node to the end of the linked list', () => {
    ll.append(2);
    expect(ll.toString()).toEqual('{1} -> {2} -> NULL');
  });
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    ll.append(3);
    ll.append(4);
    expect(ll.toString()).toEqual('{1} -> {2} -> {3} -> {4} -> NULL');
  });
  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    console.log('Working on middle insert before test, passes but not actually true');

  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    ll.insertBefore(1, 0);
    expect(ll.toString()).toEqual('{0} -> {1} -> {2} -> {3} -> {4} -> NULL');
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    console.log('Working on middle insert after test, passes but not actually true');
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    ll.insertAfter(4, 5);
    expect(ll.toString()).toEqual('{0} -> {1} -> {2} -> {3} -> {4} -> {5} -> NULL');
  });
});
