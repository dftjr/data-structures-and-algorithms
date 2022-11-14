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

  inOrder(root = this.root, arr = []) {
    if (root !== null) {
      this.inOrder(root.left, arr);
      arr.push(root.value);
      this.inOrder(root.right, arr);
    };
    return arr
  };

  preOrder(root = this.root, arr = []) {
    if (root !== null) {
      arr.push(root.value);
      this.preOrder(root.left, arr);
      this.preOrder(root.right, arr);
    };
    return arr
  };

  postOrder(root = this.root, arr = []) {
    if (root !== null) {
      this.postOrder(root.left, arr);
      this.postOrder(root.right, arr);
      arr.push(root.value);
    };
    return arr
  };
};

module.exports = BinaryTree;
