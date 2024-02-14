/*
You're given a 2D array of integers matrix. Write a function that returns the transpose of the matrix.
The transpose of a matrix is a flipped version of the original matrix across its main diagonal (which runs from the top-left to bottom-right); it switches the row and column indices of the original matrix.
You can assume the input matrix always has at least 1 value; however its width and height are not necessarily the same

example
matrix = [
  [1, 2]
]
 -> [
  [1],
  [2]
 ]
*/

const transposeMatrix = matrix => {
  const transposed = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const innerArray = [];
    for (let j = 0; j < matrix.length; j++) {
      if(matrix[j]) innerArray.push(matrix[j][i])
    }
    transposed.push(innerArray);
  }
  return transposed;
}

matrix = [
  [1, 2],
  [3, 4],
  [5, 6]
]
matrix2 = [
  [1, 2, 3],
  [4, 5, 6]
]
matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(transposeMatrix(matrix))


const x = 2; 
let y = 4; 
function update(arg) {
 return Math.random() + y * arg; 
} 
y = 2; 
y += 1
const result = update(x);
console.log(result)