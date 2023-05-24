// Link: https://leetcode.com/problems/spiral-matrix/
// Difficulty: Medium
// Time: 25 min

/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * 
 * Example 1:
 * [1,2,3]
 * [4,5,6]
 * [7,8,9]
 * 
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [1,2,3,6,9,8,7,4,5]
 * 
 * Example 2:
 * [1, 2, 3, 4]
 * [5, 6, 7, 8]
 * [9,10,11,12]
 * 
 * Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
 * Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * Constraints:
 * m == matrix.length 
 * n == matrix[i].length
 * 1 <= m, n <= 10
 * -100 <= matrix[i][j] <= 100
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralMatrix = (matrix, output = []) => {
  if (!matrix.length) {
    return output;
  }
  const spliced = matrix.splice(0, 1);
  output = output.concat(...spliced);
  const shiftedMatrix = transpose(matrix);
  return spiralMatrix(shiftedMatrix, output);
};

const transpose = matrix => {
  if (!matrix.length) return [];
  const newMatrix = [];
  for (let i = matrix[0].length - 1; i >= 0; i--) {
      const subArr = [];
      for (let j = 0; j < matrix.length; j++) {
          subArr.push(matrix[j][i]);
      }
      newMatrix.push(subArr);
  }
  return newMatrix;
}

const ex1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const ex2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]

console.log(spiralMatrix(ex1))

