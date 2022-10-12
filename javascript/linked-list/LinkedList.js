'use strict';

// CODE CHALLENGE 05
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.count = 1;
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.count++;
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }

  toString() {
    let objString = `${this.head.value}`;
    let current = this.head.next;
    for (let i = 0; i < this.count && current != null; i++) {
      objString = `${objString} -> ${current.value}`;
      current = current.next;
    }
    return objString + ' -> NULL';
  }
}

module.exports = LinkedList;
