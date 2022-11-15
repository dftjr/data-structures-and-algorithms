'use strict';

const Hashtable = require('../Hashtable');
const testTable = new Hashtable();

describe('Testing the methos in Hashtable class', () => {
  test('Setting a key/value to your hashtable results in the value being in the data structure', () => {
    testTable.set('First Key Test', 1)
    testTable.set('Second Key Test', 2)
    testTable.set('Third Key Test', 3)
    expect(testTable.has('First Key Test')).toBeTruthy();
    expect(testTable.has('Second Key Test')).toBeTruthy();
    expect(testTable.has('Third Key Test')).toBeTruthy();
    expect(testTable.has('Fourth Key Test')).toBeFalsy();
  });
  test('Retrieving based on a key returns the value stored', () => {
    expect(testTable.get('First Key Test')).toEqual(1);
    expect(testTable.get('Second Key Test')).toEqual(2);
    expect(testTable.get('Third Key Test')).toEqual(3);
    expect(testTable.get('Fourth Key Test')).toEqual(null);
  });
  test('Successfully returns null for a key that does not exist in the hashtable', () => {
    testTable.has('First Key Test')
    expect(testTable.has('First Key Test')).toBeTruthy();
    expect(testTable.has('Fourth Key Test')).toBeFalsy();
  });
  test('Successfully returns a list of all unique keys that exist in the hashtable', () => {
    testTable.keys
    expect(testTable.keys).toBeTruthy();
  });
  test('Successfully handle a collision within the hashtable', () => {
    testTable.set('First Key Test', 4)
    expect(testTable.get('First Key Test')).toEqual(4);
  });
  test('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(testTable.get('First Key Test')).toEqual(4);
  });
  // test('Successfully hash a key to an in-range value', () => {
  //   expect().toEqual();
  // });
});
