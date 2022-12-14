'use strict';

const insertionSort = require('../insertionSort')

const evenArr = [8,4,23,42,16,15];
const oddArr = [5,4,3,2,1];

describe('Testing the insertionSort function', () => {
  test('Should return a sorted even array from the one that was entered', () => {
    expect(insertionSort(evenArr)).toEqual([4,8,15,16,23,42]);
  });
  test('Should return a sorted odd array from the one that was entered', () => {
    expect(insertionSort(oddArr)).toEqual([1,2,3,4,5]);
  });
});
