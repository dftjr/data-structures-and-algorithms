'use strict';

const Graph = require('../Graph');
const graph = new Graph();
const graph2 = new Graph();

describe('Testing the methos in Graph class', () => {
  test('Node can be successfully added to the graph', () => {
    graph.addNode(1);
    expect(graph.nodes).toEqual([1]);
  });
  test('An edge can be successfully added to the graph', () => {
    graph.addNode(2);
    graph.addEdge(1, 2);
    expect(graph.nodes).toEqual([1, 2]);
    expect(graph.edges).toEqual({
      "1": [
        {
          "node": 2,
          "weight": 1,
        },
      ],
      "2": [
        {
          "node": 1,
          "weight": 1,
        },
      ],
    });
  });
  test('A collection of all nodes can be properly retrieved from the graph', () => {
    graph.getNodes();
    expect(graph.getNodes()).toEqual([1, 2]);
  });
  test('All appropriate neighbors can be retrieved from the graph', () => {
    graph.addNode(3);
    graph.addEdge(1, 3);
    expect(graph.getNeighbors(1)).toEqual([{ "node": 2, "weight": 1 }, { "node": 3, "weight": 1 }]);
  });
  test('Neighbors are returned with the weight between nodes included', () => {
    expect(graph.getNeighbors()).toEqual();
  });
  test('The proper size is returned, representing the number of nodes in the graph', () => {
    graph.size();
    expect(graph.size()).toEqual(3);
  });
  test('A graph with only one node and edge can be properly returned', () => {
    graph2.addNode(1);
    graph2.addEdge(1, 1);
    console.log(graph2)
    expect(graph2.getNodes()).toEqual([1]);
    expect(graph2.edges).toEqual({ '1': [{ node: 1, weight: 1 }, { node: 1, weight: 1 }] });
  });
});
