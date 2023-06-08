/*

Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, 
return the number of negative numbers in grid.

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Input: grid = [[3,2],[1,0]]
Output: 0

*/

const countNegatives = grid => {
  let count = 0;
  grid.forEach(array => {
    for (let i = array.length - 1; i >= 0; i--) {
      if (array[i] < 0) count++;
      else break;
    }
  })
  return count;
}

const grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
const grid1 = [[3,2],[1,0]];

console.log(countNegatives(grid1));

