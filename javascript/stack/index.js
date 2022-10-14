'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

class Stack {
  constructor() {
    this.top = null;
  };

  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) return this.top = node;
    if (!this.isEmpty()) {
      let pushNumber = this.top;
      this.top = node;
      node.next = pushNumber;
    };
  };

  pop() {
    if (this.isEmpty()) throw new Error('Error, no value found');
    if (!this.isEmpty() === true) {
      let current = this.top;
      this.top = current.next;
      current.next = null;
      return current.value;
    };
  };

  peek() {
    if (this.isEmpty()) throw new Error('Error, no value found');
    if (!this.isEmpty() === true) return this.top.value;
  };

  isEmpty() {
    return !this.top;
  };
};

module.exports = Stack;
