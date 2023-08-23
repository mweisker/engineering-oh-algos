/*
Given an array of integers betwee 1 and n, inclusive, where n is the length
of the array, write a function that returns the first integer that appears
mre than once (when the array is read from left to right).

  In other words, out of all the integers that might occur more than once
in the input array, your function should return the one whose first duplicate 
value has the minimum index.

  If no integer appears more than once, your function should return -1.

Note that you're allowed to mutate the input array.

Example:
input1 = [2, 1, 5, 2, 3, 3, 4]
output -> 2

input2 = [2, 1, 5, 3, 3, 2, 4]
output -> 3
*/

const firstDuplicateValue = (array) => {
  const cache = new Set();
  for (let i = 0; i < array.length; i++) {
    if (cache.has(array[i])) return array[i];
    cache.add(array[i]);
  }
  return -1;
}

const firstDuplicateValueOptimized = (array) => {
  for (const value of array) {
    console.log(value)
    const absValue = Math.abs(value);
    console.log(absValue)
    if (array[absValue - 1] < 0) return absValue;
    array[absValue - 1] *= -1;
  }
  return -1;
}

const input1 = [2, 1, 5, 2, 3, 3, 4]

const input2 = [-2, 1, 5, 3, 3, 2, 4]

console.log(firstDuplicateValueOptimized(input2))
