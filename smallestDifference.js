/*

Write a function that takes in two arrays and returns
the smallest difference between two numbers in 
each array

arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

Output -> [18, 26]

*/

const smallestDifference = (arrayOne, arrayTwo) => {
  let minDiff = Infinity;
  let output;
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      const smaller = Math.min((Math.abs(arrayTwo[j] - arrayOne[i])), (Math.abs(arrayOne[i] - arrayTwo[j])));
      if (smaller < minDiff) {
        output = [arrayOne[i], arrayTwo[j]];
        minDiff = smaller;
      }
    }
  }
  return output;
}

const smallestDifferenceOptimized = (arrayOne, arrayTwo) => {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let min = [arrayOne[0], arrayTwo[0]];

  let i = 0;
  let j = 0;
  while (i < arrayOne.length && j < arrayTwo.length) {
    let num1 = arrayOne[i];
    let num2 = arrayTwo[j];

    if (Math.abs(num1 - num2) < Math.abs(min[0] - min[1])) {
      min = [num1, num2]
    }

    if (num1 < num2) {
      i++;
    } else if (num1 > num2) {
      j++;
    } else if (num1 === num2) {
      return min;
    }
  }

  return min;
}

const arrayOne = [-1, 5, 10, 20, 28, 3]
const arrayTwo = [26, 134, 135, 15, 17]


console.log(smallestDifferenceOptimized(arrayOne, arrayTwo))