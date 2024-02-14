/*
We have a binary array that is circular, make the minimum number of swaps to keep all of the ones together

example 1
input: nums = [0, 1, 0, 1, 1, 0, 0]
output: 1

example 2
input: nums = [0, 1, 1, 1, 0, 0, 1, 1, 0]
output: 2

example 3
input: nums = [1, 1, 0, 0, 1]
output: 0
*/

// const minSwaps = (nums) => {
  
// }

// Eddy Solution

const minSwaps = (nums) => {
  // 1: find out how many ones are there in circular array (allOnesCount)
  const allOnesCount = nums.filter((n) => n === 1).length;
  console.log(allOnesCount);

  // 2: if there are no ones or only 1, there is no need to move anything (all ones are grouped)
  if (allOnesCount < 2) return 0;

  // 3: first we create window of size allOnesCount
  const window = nums.slice(0, allOnesCount);
  console.log(window);

  // 4: we calculate number of ones in this window;
  let currentOnesCount = window.reduce((acc, n) => acc + n);
  console.log(currentOnesCount);

  // 5: we save it as a max number of ones seen in our window so far
  let maxOnesCount = currentOnesCount;

  for (let i = 0; i < nums.length; i++) {
    // 6: we check what numbers will leave and enter our window if we move the window by 1 step
    const nextToLeaveWindow = nums[i];
    const nextToEnterWindow = nums[(i + allOnesCount) % nums.length];
    currentOnesCount = currentOnesCount - nextToLeaveWindow + nextToEnterWindow;

    console.log((i + allOnesCount) % nums.length)

    console.log(nextToLeaveWindow);
    console.log(nextToEnterWindow);
    console.log(currentOnesCount);

    // 7: now the maxOnesCount is compared with currentOnesCount and can be updated
    if (currentOnesCount > maxOnesCount) maxOnesCount = currentOnesCount;
  }

  console.log(allOnesCount);
  console.log(maxOnesCount);

  // 8: now that we know maxOnesCount, we know what's the maximum of ones within our window, all we have to do is swap out remaining (allOnesCount - maxOnesCount) zeros for ones (each will require 1 swap)
  return allOnesCount - maxOnesCount;
};

// console.log(minSwaps([0, 1, 0, 1, 1, 0, 0])); // 1
console.log(minSwaps([0, 1, 1, 1, 0, 0, 1, 1, 0])); // 2
// console.log(minSwaps([1, 1, 0, 0, 1])); //0