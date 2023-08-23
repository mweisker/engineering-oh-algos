/*
Write a function that takes in an array of at least two integers
and that returns an array of the starting and ending indices of the 
smallest subarray in the input array that needs to be sorted in place
in order for the entire input array to be sorted (in ascending order).

If the input array is already sorted, the function should return [-1, -1].

Example
const array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19];
output -> [3, 9]
*/

const subarraySort = (array) => {

  let lowerIndex = array.length;
  const lowerArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < lowerArray.length; j++) {
      if (array[i] < lowerArray[j]) {
        lowerIndex = Math.min(lowerIndex, j);
      }
    }
    lowerArray.push(array[i])
  }

  let upperIndex = -1;
  const upperArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < upperArray.length; j++) {
      if (array[i] > upperArray[j]) {
        upperIndex = Math.max(upperIndex, array.length - 1 - j);
      }
    }
    upperArray.push(array[i])
  }

  if (lowerIndex === array.length) lowerIndex = -1;

  return [lowerIndex, upperIndex];
}

const subarraySortOptimized = (array) => {
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }
  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }
  console.log(minOutOfOrder)
  let subarrayLefIdx = 0;
  while (minOutOfOrder >= array[subarrayLefIdx]) {
    console.log(array[subarrayLefIdx])
    subarrayLefIdx++;
  }
  let subarrayRightIdx = array.length - 1;
  while (maxOutOfOrder <= array[subarrayRightIdx]) {
    subarrayRightIdx--;
  }
  return [subarrayLefIdx, subarrayRightIdx];
}

function isOutOfOrder(i, num, array) {
  console.log(num)
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1]
}

// const array = [1, 2, 1, 5, 7]
const array = [1, 2, 4, 7, 10, 11, 7, 12, 16, 6, 7, 16, 18, 19];
console.log(subarraySort(array))
console.log(subarraySortOptimized(array))