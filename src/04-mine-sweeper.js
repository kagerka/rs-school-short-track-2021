/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newMatrix = matrix;
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      if (newMatrix[i][j] === true) {
        if (newMatrix[i] !== undefined && newMatrix[j + 1] !== undefined) {
          if (newMatrix[i][j + 1] !== false && newMatrix[i][j + 1] !== true) {
            newMatrix[i][j + 1] = newMatrix[i][j + 1] + 1;
          } else if (newMatrix[i][j + 1] === false) {
            newMatrix[i][j + 1] = 1;
          }
        }
        if (newMatrix[i + 1] !== undefined && newMatrix[j + 1] !== undefined) {
          if (newMatrix[i + 1][j + 1] !== false && newMatrix[i + 1][j + 1] !== true) {
            newMatrix[i + 1][j + 1] = newMatrix[i + 1][j + 1] + 1;
          } else if (newMatrix[i + 1][j + 1] === false) {
            newMatrix[i + 1][j + 1] = 1;
          }
        }
        if (newMatrix[i + 1] !== undefined && newMatrix[j] !== undefined) {
          if (newMatrix[i + 1][j] !== false && newMatrix[i + 1][j] !== true) {
            newMatrix[i + 1][j] = newMatrix[i + 1][j] + 1;
          } else if (newMatrix[i + 1][j] === false) {
            newMatrix[i + 1][j] = 1;
          }
        }
        if (newMatrix[i + 1] !== undefined && newMatrix[j - 1] !== undefined) {
          if (newMatrix[i + 1][j - 1] !== false && newMatrix[i + 1][j - 1] !== true) {
            newMatrix[i + 1][j - 1] = newMatrix[i + 1][j - 1] + 1;
          } else if (newMatrix[i + 1][j - 1] === false) {
            newMatrix[i + 1][j - 1] = 1;
          }
        }
        if (newMatrix[i] !== undefined && newMatrix[j - 1] !== undefined) {
          if (newMatrix[i][j - 1] !== false && newMatrix[i][j - 1] !== true) {
            newMatrix[i][j - 1] = newMatrix[i][j - 1] + 1;
          } else if (newMatrix[i][j - 1] === false) {
            newMatrix[i][j - 1] = 1;
          }
        }
        if (newMatrix[i - 1] !== undefined && newMatrix[j - 1] !== undefined) {
          if (newMatrix[i - 1][j - 1] !== false && newMatrix[i - 1][j - 1] !== true) {
            newMatrix[i - 1][j - 1] = newMatrix[i - 1][j - 1] + 1;
          } else if (newMatrix[i - 1][j - 1] === false) {
            newMatrix[i - 1][j - 1] = 1;
          }
        }
        if (newMatrix[i - 1] !== undefined && newMatrix[j] !== undefined) {
          if (newMatrix[i - 1][j] !== false && newMatrix[i - 1][j] !== true) {
            newMatrix[i - 1][j] = newMatrix[i - 1][j] + 1;
          } else if (newMatrix[i - 1][j] === false) {
            newMatrix[i - 1][j] = 1;
          }
        }
        if (newMatrix[i - 1] !== undefined && newMatrix[j + 1] !== undefined) {
          if (newMatrix[i - 1][j + 1] !== false && newMatrix[i - 1][j + 1] !== true) {
            newMatrix[i - 1][j + 1] = newMatrix[i - 1][j + 1] + 1;
          } else if (newMatrix[i - 1][j + 1] === false) {
            newMatrix[i - 1][j + 1] = 1;
          }
        }
      }
    }
  }
  for (let i = 0; i < newMatrix.length; i++) {
    for (let j = 0; j < newMatrix[i].length; j++) {
      if (newMatrix[i][j] === true) {
        newMatrix[i][j] = 1;
      }
      if (newMatrix[i][j] === false) {
        newMatrix[i][j] = 0;
      }
    }
  }
  return newMatrix;
}

module.exports = minesweeper;
