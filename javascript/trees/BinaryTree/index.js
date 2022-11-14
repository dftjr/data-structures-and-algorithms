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

  getMax() {
    if (this.root === null) return null;
    let solution = this.inOrder()
    let highestNum = 0;
    for (let i = 0; i <= solution.length; i++) {
      if (solution[i] > highestNum) highestNum = solution[i];
    } return highestNum;
  };

  breadthFirst(test) {
    let visited = [];
    let queue = [];
    let current = test.root;
    if (test.root === null) return null;
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      visited.push(current.value)
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return visited;
  };
};

module.exports = BinaryTree;
