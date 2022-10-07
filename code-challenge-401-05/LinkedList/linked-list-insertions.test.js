'use strict';

const LinkedList = require('./LinkedList.js');
const ll = new LinkedList();
ll.insert(3);
ll.insert(2);
ll.insert(1);

// CODE CHALLENGE 06
describe('Testing the Linked-List-Insertions data structure', () => {
  test('Can successfully add a node to the end of the linked list', () => {
    ll.append(4);
    expect(ll.head).toBeTruthy();
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.value).toEqual(3);
    expect(ll.head.next.next.next.value).toEqual(4);
    expect(ll.head.next.next.next.next).not.toBeTruthy();
  });
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    ll.append(5);
    ll.append(6);
    expect(ll.head.next.next.next.next.value).toEqual(5);
    expect(ll.head.next.next.next.next.next.value).toEqual(6);
    expect(ll.head.next.next.next.next.next.next).not.toBeTruthy();
  });
  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    console.log('working on') // functions currently broken
  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    console.log('working on') // functions currently broken
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    console.log('working on') // functions currently broken
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    console.log('working on') // functions currently broken
  });
});
