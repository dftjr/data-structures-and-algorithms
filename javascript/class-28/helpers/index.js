function sortYearHelper(movieA, movieB) {
  if (movieA.year === movieB.year) {
    return sortTitleHelper(movieA, movieB)
    } else if (movieA.year > movieB.year) return 1;
    else return -1;
}

function sortTitleHelper(movieA, movieB) {
  let titleA = removeWord(movieA.title).toLowerCase();
  let titleB = removeWord(movieB.title).toLowerCase();
  if (titleA > titleB) return 1;
  else return -1;
}

function removeWord(str) {
  let regex = /^(The) (.+)/i;
  let removeThe = str.match(regex);
  if (!removeThe) return str;
  else return removeThe[2];
}

module.exports = {
  sortYearHelper,
  sortTitleHelper,
  removeWord,
};
