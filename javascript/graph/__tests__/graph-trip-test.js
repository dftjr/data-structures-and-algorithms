'use strict';

const Graph = require('../Graph');
const graphTrip = require('../graph-trip')
const graph = new Graph();

graph.addNode('Pandora');
graph.addNode('Arendelle');
graph.addNode('Metroville');
graph.addNode('Monstropolis');
graph.addNode('Narnia');
graph.addNode('Naboo');

graph.addEdge('Pandora', 'Arendelle', 150);
graph.addEdge('Pandora', 'Metroville', 82);
graph.addEdge('Arendelle', 'Pandora', 150);
graph.addEdge('Arendelle', 'Metroville', 99);
graph.addEdge('Arendelle', 'Monstropolis', 42);
graph.addEdge('Metroville', 'Pandora', 82);
graph.addEdge('Metroville', 'Arendelle', 99);
graph.addEdge('Metroville', 'Monstropolis', 105);
graph.addEdge('Metroville', 'Naboo', 26);
graph.addEdge('Metroville', 'Narnia', 37);
graph.addEdge('Monstropolis', 'Arendelle', 42);
graph.addEdge('Monstropolis', 'Metroville', 105);
graph.addEdge('Monstropolis', 'Naboo', 73);
graph.addEdge('Narnia', 'Metroville', 37);
graph.addEdge('Narnia', 'Naboo', 250);
graph.addEdge('Naboo', 'Narnia', 250);
graph.addEdge('Naboo', 'Metroville', 26);
graph.addEdge('Naboo', 'Monstropolis', 73);


describe('Testing the graph-trip function', () => {
    test('Should return the true cost of the trip', () => {
      const cost = graphTrip(graph, ['Pandora', 'Arendelle']);
      expect(cost).toEqual(150);
    });

    test('Should return the true cost of the trip', () => {
      const cost = graphTrip(graph, ['Arendelle', 'Pandora']);
      expect(cost).toEqual(150);
    });

    test('Should return the true cost of the trip', () => {
      const cost = graphTrip(graph, ['Metroville', 'Monstropolis']);
      expect(cost).toEqual(105);
    });

    test('Should return the true cost of the trip', () => {
      const cost = graphTrip(graph, ['Narnia', 'Naboo']);
      expect(cost).toEqual(250);
    });
    test('Should return null for the trip', () => {
        const cost = graphTrip(graph, ['Narnia', 'Arendelle']);
        expect(cost).toEqual(null);
      });
  });
