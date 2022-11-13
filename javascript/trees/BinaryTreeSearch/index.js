'strict'

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
};

class BinaryTreeSearch {
  constructor() {
    this.root = null;
  };

  add(value) {
    var newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else this.addNode(this.root, newNode);
  };

  addNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) node.left = newNode;
      else this.addNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.addNode(node.right, newNode);
    };
  }

  contains(value) {

  }
};

module.exports = BinaryTreeSearch;
