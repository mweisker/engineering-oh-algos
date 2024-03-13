/**
  Return square root rounded down without using built-in exponent functions
 */

const mySqrt = x => {
  let output = 1;
  let goOn = true;
  while (goOn) {
    let tester = output + 1;
    if (tester * tester <= x) {
      output = tester;
    } else goOn = false;
  }
  return output;
}

const mySqrtBinary = x => {
  if (x < 2) return x;
  let left=0, right=x/2;
  while (left <= right) {
    const mid = Math.floor((left+right)/2);
    if(mid * mid <= x && x < (mid+1) * (mid+1)) return mid;
    else if ((mid*mid)>x) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
}

console.log(mySqrtBinary(1240))


/**
 Find the Pivot Integer

 The sum of all elements between 1 and x inclusively equals the sum of all elements
 between x and n inclusively.

 Input: n = 8
 Output: 6
 Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
 */


const pivotInteger = n => {
  
}