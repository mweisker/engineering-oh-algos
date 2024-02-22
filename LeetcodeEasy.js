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