'use strict'

function reverseArray(input) {
  const arr = [];
  for(let i = input.length-1; i >= 0; i--) {
      arr.push(input[i]);
  }
  return arr;
}

module.exports = reverseArray;
