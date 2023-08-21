/*

Write a function that takes in a non-empty array of integers and returns
an array of the same length, where each element in the output array 
is equal to the product of every other number in the input array.

In other words, the value at output[i] is equal to the product of every 
number in the input array other than input[i].

No division!

example
array = [5, 1, 4, 2]
---------------------> [8, 40, 10, 20]

*/


const arrayOfProducts = (array) => {
  const output = [];
  array.forEach((int, i) => {
    let product = 1;
    for (let j = 0; j < array.length; j++) {
      if (j !== i) product *= array[j]
      // console.log([product, array[i]])

    }
    output.push(product);
  })
  return output;
}

console.log(arrayOfProducts([5, 1, 4, 2]))