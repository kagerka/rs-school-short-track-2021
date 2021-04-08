/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let result;
  const center = Math.floor((start + end) / 2);
  let isFound = false;

  while (!isFound) {
    if (value > array[center] && value !== array[end]) {
      start = array[center];
    } else if (value < array[center] && value !== array[start]) {
      end = array[center];
    } else if (value === array[start]) {
      result = start;
      isFound = true;
    } else if (value === array[end]) {
      result = end;
      isFound = true;
    } else if (value === array[center]) {
      result = center;
      isFound = true;
    }
  }
  return result;
}

module.exports = findIndex;
