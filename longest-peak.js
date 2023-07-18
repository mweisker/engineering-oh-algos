/*

Write a function that takes in an array of integers and returns the length of the longest peak in the array

A peak is defined as adjacent integers that increases to the tip then decreases

example
input
const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
output
6 -> 0, 10, 6, 5, -1, -3
*/

const longestPeak = array => {
  let peakLength = 0;
  let currLength = 0;
  for (let i = 1; i < array.length; i++) {

    if (array[i] > array[i - 1]) currLength++;

    if (array[i] < array[i - 1] && currLength) {
      currLength++;
      for (let j = i; j < array.length; j++) {
        currLength++;
        if (array[j + 1] >= array[j]) {
          peakLength = Math.max(peakLength, currLength);
          currLength = 0;
          i = j - 1;
          break
        } else if (array[j + 1] === undefined) {
          peakLength = Math.max(peakLength, currLength);
          i = j + 1;
          break
        }
        
      }
    }

    if (array[i] <= array[i - 1]) {
      currLength = 0;
    }

  }
  return peakLength;
}

const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
const array2 = [1, 2, 3, 4, 3, 2, 1, 2]
const array3 = [1, 3, 2]
console.log(longestPeak(array))


const longestPeakEx = array => {
  let longestPeakLength = 0;
  i = 1;
  while (i < array.length - 1) {
    const isPeak = array[i - 1] < array[i] && array[i] > array[i + 1];
    if (isPeak) {
      let leftIdx = i - 2;
      while (leftIdx >=0 && array[leftIdx] < array[leftIdx + 1]) {
        leftIdx--;
      }
      let rightIdx = i + 2;
      while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
        rightIdx++;
      }
      currentPeakLength = rightIdx - leftIdx - 1;
      longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
      i = rightIdx;
      } else {
      i++;
    }
  }
  return longestPeakLength
}

console.log(longestPeakEx(array))
