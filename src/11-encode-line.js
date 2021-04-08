/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let result = [];
  let num = 0;
  for (let i = 0; i <= arr.length; i++) {
    num++;
    if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
      result.push(arr[i]);
      num = 0;
    }
    if (arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]) {
      result.push(num + arr[i]);
      num = 0;
    }
  }
  result = result.join('');
  return result;
}

module.exports = encodeLine;
