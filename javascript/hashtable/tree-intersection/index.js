"use strict";

const HashTable = require("../../hashtable/Hashtable");
const Queue = require("../../stack-and-queue/Queue");

function tree_Intersection(tree1, tree2) {
  const newHash = new HashTable();
  const arr = [];

  loop(tree1, (value) => {
    newHash.set(value, value);
    // console.log(newHash)
  });

  loop(tree2, (value) => {
    if (newHash.has(value)) arr.push(value);
    // console.log(newHash.has(value))
  });
  return arr;
}

function loop(tree, callback) {
  const queue = new Queue();
  queue.enqueue(tree.root);
  while (!queue.isEmpty()) {
    const node = queue.dequeue().value;
    callback(String(node.value));
    if (node.left) queue.enqueue(node.left);
    if (node.right) queue.enqueue(node.right);
  }
}

module.exports = tree_Intersection;
