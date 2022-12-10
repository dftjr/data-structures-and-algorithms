"use strict";

const BinaryTreeSearch = require("../../trees/BinaryTreeSearch");
const tree_Intersection = require("../tree-intersection");

describe("Testing tree intersection", () => {
  test("Should return an array of values that are in both trees", () => {
    const tree1 = new BinaryTreeSearch(1);
    tree1.add(10);
    tree1.add(20);
    tree1.add(30);
    tree1.add(40);
    tree1.add(50);

    const tree2 = new BinaryTreeSearch(2);
    tree2.add(80);
    tree2.add(70);
    tree2.add(60);
    tree2.add(50);
    tree2.add(40);

    expect(treeIntersection(tree1, tree2)).toEqual(["40", "50"]);
  });
});
