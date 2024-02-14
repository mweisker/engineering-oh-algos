/*
You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative integers.

You should rearrange the elements of nums such that the modified array follows the given conditions:

Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.

Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]

Input: nums = [-1,1]
Output: [1,-1]

*/

var rearrangeArray = function(nums) {
  const positive = [];
  const negative = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) positive.push(nums[i])
    else negative.push(nums[i])
  }
  const output = [];
  for (let i = 0; i < positive.length; i++) {
    output.push(positive[i])
    output.push(negative[i])
  }
  return output;
};

const input1 = [3,1,-2,-5,2,-4]
const input2 = [-1, 1]

console.log(rearrangeArray(input2))