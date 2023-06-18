/*

An array is monotonic if all elements aren't increasing Or not decreasing
Essentially if every new element is either the same or bigger/smaller
Empty arrays and single element arrays are monotonic as well

const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
output -> true

*/



const isMonotonic = array => {
  let increasing = true;
  let decreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (increasing) {
      if (array[i] < array[i - 1]) increasing = false;
    }
    if (decreasing) {
      if (array[i] > array[i - 1]) decreasing = false;
    }
  }
  return increasing || decreasing;
}

// Solution is essentially the same thing, just maybe cleaner and looks more professional
const isMonotonicEx = array => {
  let increasing = true;
  let decreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (isIncreasing(array[i], array[i - 1])) decreasing = false;
    if (isDecreasing(array[i], array[i - 1])) increasing = false;
  }
  return increasing || decreasing;
}

function isIncreasing(a, b) {
  return a > b;
}

function isDecreasing(a, b) {
  return a < b;
}


const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
const array2 = [6, 7, 7, 7, 7, 0]
console.log(isMonotonicEx(array2))
