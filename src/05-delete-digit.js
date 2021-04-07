/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const num = n.toString();
  let number;
  const arr = [];
  for (let i = 0; i < num.length; i++) {
    number = num.replace(num[i], '');
    arr.push(number);
  }
  let result = arr.sort((a, b) => a - b);
  result = result[result.length - 1];
  return +result;
}

module.exports = deleteDigit;
