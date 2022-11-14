'strict'

const BinaryTree = require("../../BinaryTreeSearch")
const testTree = new BinaryTree();
const testTreeEmpty = new BinaryTree();
testTree.add(1);
testTree.add(2);
testTree.add(3);

 describe('Testing Binary Tree methods', () => {
   test('Can successfully return a collection from an preOrder traversal', () => {
     let solution = testTree.preOrder()
     expect(solution).toEqual([1,2,3])
    });
    test('Can successfully return a collection from an inorder traversal', () => {
      let solution = testTree.inOrder()
      expect(solution).toEqual([1,2,3])
    });
    test('Can successfully return a collection from an postOrder traversal', () => {
      let solution = testTree.postOrder()
      expect(solution).toEqual([3,2,1])
    });
    test('Can successfully return the highest number from the ', () => {
      let solution2 = testTree.getMax()
      expect(solution2).toEqual(3)
    });
    test('Can successfully return null if theres no high number to show', () => {
      let solution3 = testTreeEmpty.getMax()
      expect(solution3).toEqual(null)
    });
  });
