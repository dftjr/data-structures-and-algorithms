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
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
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
    let returnValue = String(this.head);
    if (this.next) {
      returnValue = returnValue + "-> " + String(this.next);
    }
  r eturn returnValue;
    };
    return false;
  }

  // CODE CHALLENGE 06
  append(value) {
    let newNode = new Node(value)
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Code below is currently not working, trying to fix it

  // insertBefore(oldValue, newValue) {
  //   let newNode = new Node(newValue)
  //   let current = this.head;
  //   if (current.next === oldValue)
  //     current.next.next = this.insert(newValue);
  //   if (current.next !== oldValue)
  //     while (current.next !== null && current.next.value !== oldValue) {
  //       current = current.next;
  //     }
  //   if (current.next !== null) {
  //     newNode.next = current.next;
  //     current.next = newNode;
  //   }
  //   if (current.next === null) {
  //     return 'Hmmm, something went wrong';
  //   }
  // }

  // insertAfter(oldValue, newValue) {
  //   let newNode = new Node(newValue);
  //   let current = this.head;
  //   while (current.next !== null && current.oldValue !== oldValue) {
  //     current = current.next;
  //   }
  //   if(current.next === null) {
  //     return 'Hmmm, something went wrong';
  //   } else {
  //     newNode.next = current.next;
  //     current.next = newNode;
  //   }
  // }
}

function traverse(ll) {
  let current = ll.head;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

module.exports = LinkedList;
