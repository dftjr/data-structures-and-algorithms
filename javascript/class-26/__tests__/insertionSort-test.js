'use strict';

const insertionSort = require('../insertionSort')

describe('Testing the insertionSort function', () => {
  test('Should return a sorted array from the one that was entered', () => {
    const arr1 = [4,3,2,1];
    expect(insertionSort(arr1)).toEqual([1,2,3,4]);
  });
  test('Should return a sorted array from the one that was entered', () => {
    const arr2 = [1,5,3,4,2];
    expect(insertionSort(arr2)).toEqual([1,2,3,4,5]);
  });
});
