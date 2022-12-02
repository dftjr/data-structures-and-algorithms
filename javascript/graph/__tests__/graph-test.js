'use strict';

const Graph = require('../Graph');
const graph = new Graph();
const graph2 = new Graph();
const graph3 = new Graph();
const graph4 = new Graph();

describe('Testing the methods in Graph class', () => {
  test('Node can be successfully added to the graph', () => {
    graph.addNode(1);
    expect(graph.vertices).toEqual([1]);
  });
  test('An edge can be successfully added to the graph', () => {
    graph.addNode(2);
    graph.addEdge(1, 2);
    expect(graph.vertices).toEqual([1, 2]);
    expect(graph.adjacents).toEqual({
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
    expect(graph2.adjacents).toEqual({ '1': [{ node: 1, weight: 1 }, { node: 1, weight: 1 }] });
  });
});

describe('Testing the breadth-first method in Graph class', () => {
  test('A collection of nodes in their beadth-first traversal order', () => {
    graph3.addNode("Pandora");
    graph3.addNode("Arendelle");
    graph3.addNode("Naboo");
    graph3.addNode("Monstroplolis");
    graph3.addNode("Metroville");
    graph3.addNode("Narnia");
    graph3.addEdge("Pandora", "Arendelle");
    graph3.addEdge("Arendelle", "Metroville");
    graph3.addEdge("Metroville", "Monstroplolis");
    graph3.addEdge("Metroville", "Narnia");
    graph3.addEdge("Metroville", "Naboo");
    expect(graph3.breadthFirst("Pandora")).toEqual(["Pandora", "Arendelle", "Metroville", "Monstroplolis", "Narnia", "Naboo"])
    expect(graph2.breadthFirst(1)).toEqual([1])
    expect(graph.breadthFirst(1)).toEqual([1,2,3])
  });
});

  describe('Testing the depth-first method in Graph class', () => {
    test('A collection of nodes in their pre-order depth-first traversal order', () => {
      graph4.addNode("A");
      graph4.addNode("B");
      graph4.addNode("C");
      graph4.addNode("D");
      graph4.addNode("E");
      graph4.addNode("F");
      graph4.addNode("G");
      graph4.addNode("H");
      graph4.addEdge("A", "B");
      graph4.addEdge("B", "D");
      graph4.addEdge("B", "C");
      graph4.addEdge("C", "G");
      graph4.addEdge("D", "F");
      graph4.addEdge("D", "H");
      graph4.addEdge("D", "E");
      graph4.addEdge("F", "H");
      expect(graph4.depthFirst("A")).toEqual(["A", "B", "C", "G", "D", "E", "H", "F"]);
      expect(graph2.depthFirst(1)).toEqual([1]);
      expect(graph.depthFirst(1)).toEqual([1,3,2]);
    });
});
