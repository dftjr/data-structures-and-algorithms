'strict'

const BinaryTree = require("../../BinaryTreeSearch")
const testTree = new BinaryTree();
testTree.add(1);
testTree.add(2);
testTree.add(3);

 describe('Can successfully return a collection from a preorder traversal', () => {
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
  });


