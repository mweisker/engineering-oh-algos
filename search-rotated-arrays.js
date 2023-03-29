// Link: https://leetcode.com/problems/search-in-rotated-sorted-array/
// Difficulty: Medium
// Time: 30 min

/* 
There is an integer array nums sorted in ascending order (with distinct values).
​
Prior to being passed to your function, nums is possibly rotated at an unknown pivot 
index k (1 <= k < nums.length) such that the resulting array is 
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
​
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
​
Given the array nums after the possible rotation and an integer target, return the index 
of target if it is in nums, or -1 if it is not in nums.
​
You must write an algorithm with O(log n) runtime complexity.
​
 
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
​
Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
​
Example 3:
Input: nums = [1], target = 0
Output: -1
 
​
Constraints:
1 <= nums.length <= 5000
-10^4 <= nums[i] <= 10^4
All values of nums are unique.
nums is an ascending array that is possibly rotated.
-10^4 <= target <= 10^4 
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  console.log('nums ', nums)

  if (!nums.length) return;

  let first = 0;
  let last = nums.length - 1;
  if (nums[first] === target) return first;
  if (nums[last] === target) return last;

  const findBreakPoint = (array, low, high) => {
    const mid = Math.floor((low + high) / 2);
    if (array[mid] < array[mid - 1]) return mid;
    if (low === mid) return;
    if (array[mid] > array[low]) return findBreakPoint(array, mid, high);
    else return findBreakPoint(array, low, mid);
  }

  const breakIndex = findBreakPoint(nums, first, last);

  let targetIndex = -1;

  const parse = (low, high) => {
    if (nums[low] === target) return targetIndex = low;
    if (nums[high] === target) return targetIndex = high;
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) return targetIndex = mid;

    if (mid === low) return;

    if (target < nums[mid]) return parse(low, mid);
    else return parse(mid, high);
  }
  
  if (target >= nums[first] && target <= nums[breakIndex - 1] ) parse(first, breakIndex - 1);
  else if (target >= nums[breakIndex] && target <= nums[last]) parse(breakIndex, last);
  else parse(first, last);

  return targetIndex;
};

/*
const findBreakPointGlobal = (array, low, high, breakIndex = -1) => {
  console.log(low);
  console.log(high)
  const mid = Math.floor((low + high) / 2);
  console.log(mid)
  if (array[mid] < array[mid - 1]) return mid;
  if (low === mid) return;


  if (array[mid] > array[low]) return findBreakPointGlobal(array, mid, high);
  else return findBreakPoint(array, low, mid);
}
*/

const numsOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const nums = [4, 5, 6, 7, 0, 1, 2];
const nums2 = [4, 5, 6, 7, 8, 1, 2, 3]

// console.log(findBreakPointGlobal(numsOrder, 0, nums.length - 1));

console.log(search(nums, 7));