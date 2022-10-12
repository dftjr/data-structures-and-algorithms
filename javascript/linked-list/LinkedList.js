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
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
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
    let objString = '';
    let current = this.head;
    while (current !== null) {
      objString += `{${current.value}} -> `;
      current = current.next;
    }
    return objString + 'NULL';
  }

  // CODE CHALLENGE 06
  append(value) {
    let node = new Node(value)
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  insertBefore(oldValue, value) {
    let node = new Node(value)
    let current = this.head;
    if (current.value === oldValue) {
      this.insert(value);
    }
    if (current.value !== oldValue) {
      while (current.next !== null && current.next.value !== oldValue) {
        current = current.next;
      }
      if (current.next !== null)
        return console.log('Hmmm, something went wrong');
      if (current.next === null) {
        node.next = current.next;
        current.next = node;
      }
    }
  }

    insertAfter(oldValue, value) {
      let node = new Node(value);
      let current = this.head;
      while (current.next !== null && current.value !== oldValue) {
        current = current.next;
      }
      if (current.next !== null)
        return console.log('Hmmm, something went wrong');
      if (current.next === null) {
        node.next = current.next;
        current.next = node;
      }
    }
  }

module.exports = LinkedList;
