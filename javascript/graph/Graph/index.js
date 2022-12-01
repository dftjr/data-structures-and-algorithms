'use strict';

class Graph {
  constructor() {
      this.edges = {};
      this.nodes = [];
   };

  addNode(value) {
    this.nodes.push(value);
    this.edges[value] = [];
  };


  addEdge(nodeA, nodeB, weight = 1) {
    this.edges[nodeA].push({ node: nodeB, weight: weight });
    this.edges[nodeB].push({ node: nodeA, weight: weight });
  };

  getNodes() {
    return this.nodes;
  };

  getNeighbors(node) {
    if (!this.edges) return this.edges;
    return this.edges[node];
  };

  size() {
    if (!this.nodes) return 0;
    return this.getNodes().length;
  };
};

module.exports = Graph;
