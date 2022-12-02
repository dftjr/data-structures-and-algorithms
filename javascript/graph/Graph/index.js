'use strict';

class Graph {
  constructor() {
    this.adjacents = {};
    this.vertices = [];
    this.edges = 0;
  };

  addNode(value) {
    this.vertices.push(value);
    this.adjacents[value] = [];
  };


  addEdge(nodeA, nodeB, weight = 1) {
    this.adjacents[nodeA].push({ node: nodeB, weight: weight });
    this.adjacents[nodeB].push({ node: nodeA, weight: weight });
  };

  getNodes() {
    return this.vertices;
  };

  getNeighbors(node) {
    if (!this.adjacents) return this.adjacents;
    return this.adjacents[node];
  };

  size() {
    if (!this.vertices) return 0;
    return this.getNodes().length;
  };

  breadthFirst(node) {
    let adjacent = this.adjacents;
    let visitedArr = [];
    const queue = [];
    queue.push(this.vertices[0]);
    const discovered = [];
    discovered[this.vertices[0]] = true;
    while (queue.length) {
      let visited = queue.shift();
      visitedArr.push(visited)
      if (visited === node) {
        return visitedArr;
      }
      for (let i = 0; i < adjacent[visited].length; i++) {
        if (!discovered[adjacent[visited][i].node]) {
          discovered[adjacent[visited][i].node] = true;
          queue.push(adjacent[visited][i].node);
        }
      }
    }
    return visitedArr;
  }
};

module.exports = Graph;
