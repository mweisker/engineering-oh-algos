/*

Write a function that takes an array of numbers and a target sum
Find all quadruples in the array that sum up to the target sum and return a two dimensional array of all quadruplets

example:
array = [7, 6, 4, -1, 1, 2];
targetSum = 16;

output -> [[7, 6, 4, -1], [7, 6, 1, 2]]

*/

const fourNumberSum = (array, targetSum) => {
  const output = [];
  const numParser = (array, sum, quartet = [], index = 0) => {
    if (quartet.length === 4) {
      if (sum === 0) {
        output.push(quartet);
      }
      return;
    }
    if (index >= array.length) {
      return
    };

    const newQuartet = [...quartet];
    newQuartet.push(array[index])
    const newSum = sum - array[index];
    const newIndex = index + 1;

    numParser(array, sum, quartet, index+1);

    numParser(array, newSum, newQuartet, newIndex)

  }
  numParser(array, targetSum)
  return output;
}

array = [7, 6, 4, -1, 1, 2];
targetSum = 16;

array2 = [1, 2, 3, 4, 5];
targetSum2 = 10;

console.log(fourNumberSum(array, targetSum));