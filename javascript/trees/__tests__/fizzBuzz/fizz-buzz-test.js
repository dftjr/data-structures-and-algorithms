'use strict'

const { Node, BasicTree, } = require("../../FizzBuzz");
const { fizzBuzzTree } = require('../../FizzBuzz');

let testTree = new BasicTree()
testTree.root = new Node(1)

describe("tree fizz buzz", () => {
    testTree.root.leaf[0] = new Node(6);
    testTree.root.leaf[0].leaf[0] = new Node(10);
    testTree.root.leaf[0].leaf[1] = new Node(15);
    fizzBuzzTree(testTree);
    test(`Should return the proper changes when checked`, () => {
        expect(testTree.display()).toEqual([1, "fizz", "buzz", "fizzBuzz"]);
    });
});
