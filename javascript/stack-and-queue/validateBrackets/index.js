function validateBrackets(string) {
  let counterCurly = 0;
  let counterSquare = 0;
  let counterParentheses = 0;
  for (let i = 0; i <= string.length; i++) {
    let temp = string[i];
    if (temp === '(') counterParentheses++
    if (temp === '[') counterSquare++
    if (temp === '{') counterCurly++
    if (temp === ')') counterParentheses--
    if (temp === ']') counterSquare--
    if (temp === '}') counterCurly--
    if (counterCurly < 0 || counterSquare < 0 || counterParentheses < 0) return false;

  }
  if (counterCurly === 0 && counterSquare === 0 && counterParentheses === 0) return true;
  else return false
};

module.exports = validateBrackets;
