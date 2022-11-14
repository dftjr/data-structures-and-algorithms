'strict'

const BinaryTree = require("../../BinaryTreeSearch")
const testTree = new BinaryTree();
const testTreeEmpty = new BinaryTree();
testTree.add(2);
testTree.add(5);
testTree.add(7);
testTree.add(2);
testTree.add(6);
testTree.add(9);
testTree.add(5);
testTree.add(11);
testTree.add(4);

 describe('Testing Binary Tree methods', () => {
   test('Can successfully return a collection from an preOrder traversal', () => {
     let solution = testTree.preOrder()
     expect(solution).toEqual([2,5,2,4,7,6,5,9,11])
    });
    test('Can successfully return a collection from an inorder traversal', () => {
      let solution = testTree.inOrder()
      expect(solution).toEqual([2,2,4,5,5,6,7,9,11])
    });
    test('Can successfully return a collection from an postOrder traversal', () => {
      let solution = testTree.postOrder()
      expect(solution).toEqual([4,2,5,6,11,9,7,5,2])
    });
    test('Can successfully return the highest number from the ', () => {
      let solution2 = testTree.getMax()
      expect(solution2).toEqual(11)
    });
    test('Can successfully return null if theres no high number to show', () => {
      let solution3 = testTreeEmpty.getMax()
      expect(solution3).toEqual(null)
    });
    test('Can successfully return null if theres no BFS to traverse', () => {
      let solution4 = testTreeEmpty.breadthFirst(testTreeEmpty)
      expect(solution4).toEqual(null)
    });
    test('Can successfully return a collection in BFS order', () => {
      let solution5 = testTree.breadthFirst(testTree)
      expect(solution5).toEqual([2, 5, 2, 7, 4, 6, 9, 5, 11])
    });
  });
