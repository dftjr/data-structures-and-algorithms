'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) return this.front = node;
    if (this.back) {
      this.back.next = node;
      this.back = node;
    }
    if (!this.back) {
      this.back = node;
      this.front.next = node;
    }
  }

  dequeue() {
    if (this.isEmpty()) throw new Error('Error, no value found');
    const current = this.front;
    this.front = this.front.next;
    current.next = null;
    return current.value;
  }

  peek() {
    if (this.isEmpty()) throw new Error('Error, no value found');
    if (!this.isEmpty()) return this.front.value;
  };

  isEmpty() {
    return !this.front;
  }
}

module.exports = Queue;
