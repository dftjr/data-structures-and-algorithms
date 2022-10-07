'use strict';

const LinkedList = require('./LinkedList.js');
const ll = new LinkedList();

// CODE CHALLENGE 05
describe('Testing the Linked-List data structure', () => {
  test('Can successfully instantiate an empty linked list', () => {
    expect(ll).toBeTruthy();
    expect(ll.head).not.toBeTruthy();
  });
  test('Can properly insert into the linked list', () => {
    ll.insert(1);
    expect(ll.head).toBeTruthy();
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next).not.toBeTruthy();
  });
  test('The head property will properly point to the first node in the linked list', () => {
    expect(ll.head.value).toEqual(1);
  });
  test('Can properly insert multiple nodes into the linked list', () => {
    ll.insert(2);
    ll.insert(3);
    expect(ll.head).toBeTruthy();
    expect(ll.head.value).toEqual(3);
    expect(ll.head).toBeTruthy();
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.next).not.toBeTruthy();
  });
  test('Will return true when finding a value within the linked list that exists', () => {
    let finding = ll.includes(3);
    expect(finding).toBeTruthy();
  });
  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let finding = ll.includes(4);
    expect(finding).not.toBeTruthy();
  });
  test('Can properly return a collection of all the values that exist in the linked list', () => {
    let str = ll.toString(3);
    console.log(str);
    expect(str).toEqual(true);
  });
});

// CODE CHALLENGE 06
describe('Testing the Linked-List-Insertions data structure', () => {
  test('Can successfully add a node to the end of the linked list', () => {
    console.log('working on')
  });
  test('Can successfully add multiple nodes to the end of a linked list', () => {
    console.log('working on')
  });
  test('Can successfully insert a node before a node located i the middle of a linked list', () => {
    console.log('working on')
  });
  test('Can successfully insert a node before the first node of a linked list', () => {
    console.log('working on')
  });
  test('Can successfully insert after a node in the middle of the linked list', () => {
    console.log('working on')
  });
  test('Can successfully insert a node after the last node of the linked list', () => {
    console.log('working on')
  });
});
