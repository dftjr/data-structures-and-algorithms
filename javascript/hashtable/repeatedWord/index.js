'use strict'

const Hashtable = require('../Hashtable')

function repeatedWord(str) {
  const hashTable = new Hashtable();
  const arr = removePunctuation(str);

  for(let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if(hashTable.has(word)) {
      const value = hashTable.get(word);
      if(value) return value;
    }
    else hashTable.set(word, word);
  }
  return null;
}

function removePunctuation(str) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const newStr = str.replace(regex, '').toLowerCase();
  return strToArr(newStr)
}

function strToArr(str) {
  const arr = str.split(' ');
  return arr;
}

module.exports = {
  repeatedWord,
  removePunctuation,
  strToArr,
};
