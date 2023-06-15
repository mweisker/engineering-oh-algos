/* 

You are given an array of integers and an integer
Create a function that moves all instances of that integer to the end
Should mutate the array in place

input - [2, 1, 2, 2, 2, 3, 4, 2], 2
outout - [1, 3, 4, 2, 2, 2, 2]

*/

const moveElementToEnd = (array, toMove) => {
  const front = [];
  array.forEach(element => {
    if (element !== toMove) front.push(element);
  })  

  for (let i = 0; i < array.length; i++) {
    if (i < front.length) array[i] = front[i];
    else array[i] = toMove;
  }
  return array;
}

const moveElementToEndOptimized = (array, toMove) => {
  let first = 0;
  let second = 1;
  while(second < array.length) {
    if (array[first] !== toMove) {
      first++;
      second++;
    } else {
      if (array[second] === toMove) {
        second++;
      } else {
        array[first] = array[second];
        array[second] = toMove;
        first++;
        second++;
      }
    }
  }
  return array;
}

const moveElementToEndAlternate = (array, toMove) => {
  let first = 0;
  let last = array.length - 1;
  while (first < last) {
    if (array[last] !== toMove) {
      if (array[first] === toMove) [array[first], array[last]] = [array[last], array[first]];
      first++;
    } else last--;
  }
  return array;
}


array1 = [2, 1, 2, 2, 2, 3, 4, 2];
array2 = [1, 2, 2, 2, 3, 4]

console.log(moveElementToEndAlternate(array1, 2))