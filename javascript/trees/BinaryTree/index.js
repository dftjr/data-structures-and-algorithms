'strict'

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
};

class BinaryTree {
  constructor() {
    this.root = null;
  };

  inOrder(node) {
    const nodesValue = [];
    if(root !== root) {
      this.inOrder(root.left);
      nodesValue.push(root.value);
      this.inOrder(root.right);
    };
    return nodesValue;
  };

  preOrder(node) {
    const nodesValue = [];
    if(root !== root) {
      nodesValue(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    };
    return nodesValue;
  };

  postOrder(node) {
    const nodesValue = [];
    if(root !== null) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      nodesValue(root.value);
    };
    return nodesValue;
  };
};

module.exports = BinaryTree;
