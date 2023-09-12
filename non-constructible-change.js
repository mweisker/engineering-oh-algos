/*
Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create.  The given coins can have any positive integer value and aren't necessarily unique (i.e. you can have multiple coins with the same value).

For example, if you are given coins = [1, 2, 5] the minimum amount of change that you can't create is 4.  If you're given no coins, the minimum amount of change that you can't create is 1

example;
coins = [5, 7, 1, 1, 2, 3, 22]
-> 20
*/

const nonConstructibleChange = coins => {
  let minimum = 0;
  let minFound = true;
  const sortedCoins = coins.sort((a, b) => a - b);
  while (minFound) {
    minimum++;
    minFound = minPossible(sortedCoins, minimum);
  }
  return minimum
}

// coins = [5, 7, 1, 1, 2, 3, 22]
coins = [1, 1, 1, 1, 5]
console.log(nonConstructibleChangeOptimized(coins));


// console.log(minPossible([1, 5], 5))

function minPossible(sortedCoins, target, index = 0) {
  console.log
  let found = false;
  const parse = (sortedCoins, target, index) => {
    if (index >= sortedCoins.length) return;
    const newTarget = target - sortedCoins[index];
    if (newTarget === 0) {
      found = true;
      return;
    }
    if (newTarget < 0) return;
    parse(sortedCoins, newTarget, index + 1)
    parse(sortedCoins, target, index + 1)
  }
  parse(sortedCoins, target, index);
  return found;
}


function nonConstructibleChangeOptimized(coins) {
  coins.sort((a, b) => a - b);

  let currentChangeCreated = 0;
  for (const coin of coins) {
    console.log(coin)
    console.log(currentChangeCreated)
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;
    currentChangeCreated += coin;
  }
  return currentChangeCreated + 1;
}