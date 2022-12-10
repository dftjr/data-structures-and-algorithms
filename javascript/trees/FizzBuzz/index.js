'use strict'

class Node {
  constructor(data) {
    this.data = data;
    this.leaf = [];
  }
}

class BasicTree {
  constructor() {
    this.root = null;
  }

  display() {
    let arr = [];
    arr.push(this.root.data);

    function loop(node) {
      node.leaf.forEach((e, idx) => { arr.push(e.data), loop(node.leaf[idx]) });
    }
    loop(this.root);
    return arr;
  }
}

function fizzBuzzTree(tree) {
  let data = [];

  function loop(node) {
    if (data.length === 0) {
      fizzBuzzCheck(node);
    };

    node.leaf.forEach((e, idx) => {fizzBuzzCheck(e), loop(e)});

    function fizzBuzzCheck(e) {
      if (e.data === 1 || e.data === 0) data.push(e.data);
      if (e.data % 5 === 0 && e.data % 3 === 0) { e.data = "fizzBuzz", data.push(e.data) }
      if (e.data % 5 === 0) { e.data = "buzz", data.push(e.data) }
      if (e.data % 3 === 0) { e.data = "fizz", data.push(e.data) }
      else data.push(e.data);
    };
  };
  loop(tree.root);
  return tree;
};

module.exports = {
  fizzBuzzTree,
  Node,
  BasicTree
};
