'strict'

const BinaryTree = require("../../BinaryTreeSearch")
const testTree = new BinaryTree();

describe('Testing Binary Tree Search methods', () => {
  test('Can successfully instantiate an empty tree', () => {
    testTree;
    expect(testTree).toBeTruthy();
    expect(testTree.root).toEqual(null)
  });
  test('Can successfully instantiate a tree with a single root node', () => {
    testTree.add(2);
    expect(testTree.root.value).toEqual(2);
    expect(testTree.root.left).toEqual(null);
    expect(testTree.root.right).toEqual(null);
  });
  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', () => {
    testTree.add(1);
    testTree.add(3);
    expect(testTree.root.value).toEqual(2);
    expect(testTree.root.left.value).toEqual(1);
    expect(testTree.root.right.value).toEqual(3);
  });
  test('Returns true / false for the contains method, given an existing or non-existing node value', () => {
    let solution = testTree.contains(1)
    let solution2 = testTree.contains(4)
    expect(solution).toEqual(true);
    expect(solution2).toEqual(false);
  });
});
