'use strict';

// CODE CHALLENGE 05
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

class LinkedList {
  constructor() {
    this.head = null;
  };

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  };

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    };
    return false;
  };

  toString() {
    let objString = '';
    let current = this.head;
    while (current !== null) {
      objString += `{${current.value}} -> `;
      current = current.next;
    };
    return objString + 'NULL';
  };

  // CODE CHALLENGE 06
  append(value) {
    let node = new Node(value)
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    };
    current.next = node;
  };

  insertBefore(oldValue, value) {
    let node = new Node(value)
    let current = this.head;
    if (current.value === oldValue) {
      this.insert(value);
    };
    if (current.value !== oldValue) {
      while (current.next !== null && current.next.value !== oldValue) {
        current = current.next;
      };
      if (current.next !== null)
        return false;
      if (current.next === null) {
        node.next = current.next;
        current.next = node;
      };
    };
  };

  insertAfter(oldValue, value) {
    let node = new Node(value);
    let current = this.head;
    while (current.next !== null && current.value !== oldValue) {
      current = current.next;
    };
    if (current.next !== null)
      return false;
    if (current.next === null) {
      node.next = current.next;
      current.next = node;
    };
  };

  kthFromEnd(k) {
    let current = this.head;
    let num = 0;
    while (current !== null) {
      current = current.next;
      num++;
    };
    if (num < k) {
      return false;
    }
    if (num >= k) {
      current = this.head;
      for(let i = 0; i < num - k; i++) {
        current = current.next;
      };
    };
    return current.value;
  };

  // CODE CHALLENGE 08
  zipLists(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;
    this.head = new Node(current1.value);
    let current = this.head;
    current.next = new Node(current2.value);
    while(current1 !== null && current2 !== null) {
      // current = current.next;
      current.next = new Node(current2.value);
      current = current.next;
      current.next = new Node(current1.value);
      current1 = current1.next;
      current2 = current2.next;
      console.log(current);
    }
  }
};

module.exports = LinkedList;
