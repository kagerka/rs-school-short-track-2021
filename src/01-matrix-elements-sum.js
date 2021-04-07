/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const arr = [];
  let result = [];
  if (matrix.length === 1 && matrix[0].length === 1) {
    [result] = [matrix[0][0]];
    return result;
  }
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] > 0) {
      arr.push(matrix[0][i]);
    }
  }

  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0 && matrix[i + 1][j] !== 0) {
        arr.push(matrix[i + 1][j]);
      }
    }
  }
  result = arr.reduce((a, b) => a + b);
  return result;
}

module.exports = getMatrixElementsSum;
