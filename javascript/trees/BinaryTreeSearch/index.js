'strict'

const BinaryTree = require('../BinaryTree')

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
};

class BinaryTreeSearch extends BinaryTree{
  constructor() {
    super()
  };

  add(value) {
    const newNode = new Node(value);
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
    let solution = this.inOrder()
    for (let i = 0; i <= solution.length; i++) {
      if (solution[i] === value) return true
    }
    return false
  };
};

module.exports = BinaryTreeSearch;

