/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArr = arr;
  let numbers = [];
  const result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] !== -1) {
      numbers.push(newArr[i]);
    }
  }
  numbers = numbers.sort((a, b) => a - b);
  for (let i = 0, j = 0; i < newArr.length; i++) {
    if (newArr[i] === -1) {
      result.push(newArr[i]);
    } else {
      result.push(numbers[j]);
      j++;
    }
  }
  return result;
}

module.exports = sortByHeight;
