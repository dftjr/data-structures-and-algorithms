'strict'

const BinaryTreeSearch = require("../BinaryTreeSearch")
const testTree = new BinaryTreeSearch();

describe('Test binary tree search', () => {
  test('Can successfully instantiate an empty tree', () => {
    testTree.isEmpty();
    expect(testTree.isEmpty()).toBeTruthy();
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
  // test('Can successfully return a collection from a preorder traversal', () => {
  //   testTree.inOrder(testTree.root)
  //   expect(testTree.root.value).toEqual(1);
  //   expect(testTree.root.left).toEqual(null);
  //   expect(testTree.root.right).toEqual(null);
  // });
  // test('Can successfully return a collection from an inorder traversal', () => {
  //   testTree.preOrder(testTree.root)
  //   expect(testTree1.root.value).toEqual(1);
  //   expect(testTree1.root.left).toEqual(null);
  //   expect(testTree1.root.right).toEqual(null);
  // });
  // test('Can successfully return a collection from a postorder traversal', () => {
  //   testTree.postOrder(testTree.root)
  //   expect(testTree1.root.value).toEqual(1);
  //   expect(testTree1.root.left).toEqual(null);
  //   expect(testTree1.root.right).toEqual(null);
  // });
  // test('Returns true false for the contains method, given an existing or non-existing node value', () => {
  //   expect(testTree1.root.value).toEqual(1);
  //   expect(testTree1.root.left).toEqual(null);
  //   expect(testTree1.root.right).toEqual(null);
  // });
});
