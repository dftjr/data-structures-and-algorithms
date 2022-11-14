'use strict'

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KAryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    const newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else this.buildTree(this.root, newNode);
  };

  buildTree(a, n, k, h) {
    let ind = null;
    if (n <= 0) return null;
    let nNode = neNode(A[ind])
    ;
    if (nNode === null) return null
    for (let i = 0; i < k; i++) {
      if (ind < n - 1 && h > 1) {
        ind++;
        nNode.child.push(buildTree(A, n, k, h - 1))
      }
      else nNode.children.push(null)
    }
    return nNode;
  }
}
