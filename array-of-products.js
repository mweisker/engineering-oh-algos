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

const arrayOfProductsOptimized = (array) => {
  const products = new Array(array.length).fill(1);

  let leftRunningProduct = 1;
  for (let i = 0; i < array.length; i++) {
    products[i] = leftRunningProduct;
    leftRunningProduct *= array[i];
  }

  console.log(products)

  let rightRunningProduct = 1;
  for (let i = array.length - 1; i >= 0; i--) {
    products[i] *= rightRunningProduct;
    rightRunningProduct *= array[i];
  }

  return products;
}

console.log(arrayOfProductsOptimized([5, 1, 4, 2]))

/*
leftProducts = [1, 5, 5, 20]
rightProducts = [8, 8,  2, 1]
*/