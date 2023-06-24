/*

Amazon released a game where you try and match brackets, and get the biggest difference between them
Essentially have two pointers and that's about it

ex
const s = '()()'

first and last bracket will be paired where i=0 and j=3, 3-0 = 3
return 3

*/

const bracketScorer = string => {
  let i = 0;
  let j = string.length - 1;
  let score = 0;

  while (i < j) {
    if (string[i] === '(' && string[j] === ')') {
      score += (j - i);
      i++;
      j--;
    } else {
      if (string[i] !== '(') i++;
      if (string[j] !== ')') j--;
    }
  }

  return score;
}


// From Kevin
function getMaximumScore(s) { 
  const memo = {}; 
  // Memoization object to store computed results 
  function dp(s, used, start) { 
    // const key = ${used}_${start}; 
    // // Generate a unique key based on current parameters 
    // if (memo.hasOwnProperty(key)) { 
    //   return memo[key]; 
    //   // Return memoized result if available 
    // } 
    let maxScore = 0; 
    for (let i = start; i < s.length; i++) { 
      if (!used[i] && s[i] === '(') { 
        for (let j = i + 1; j < s.length; j++) { 
          if (!used[j] && s[j] === ')') { 
            used[i] = true; 
            used[j] = true; 
            const score = (j - i) + dp(s, used, i + 1); 
            // Calculate the score and make a recursive call 
            maxScore = Math.max(maxScore, score); 
            // Update the maximum score 
            used[i] = false; 
            used[j] = false; 
          } 
        } 
      } 
    } 
    memo[key] = maxScore; 
    // Memoize the result return maxScore; 
  } 
  const used = new Array(s.length).fill(false); 
  return dp(s, used, 0); 
}

// From Kevin
function maxScore(s) {
  return backtrack(s, 0, 0, 0, []);
}
function backtrack(s, i, score, tempScore, used) {
  // Base case: if we've gone through the entire string, return the score.
  if (i >= s.length) return score;
  
  let max = score;
  for (let j = 0; j < s.length; j++) {
    if (!used[j] && s[j] === ')' && s[i] === '(') {
      // Make a move: choose the pair of parentheses at indices i and j.
      used[i] = used[j] = true;
      tempScore = j - i;
      // Move on to the next opening bracket and update the score.
      max = Math.max(max, backtrack(s, i + 1, score + tempScore, 0, used));
      // Undo the move: unchoose the pair of parentheses at indices i and j.
      used[i] = used[j] = false;
    }
  }
  // If no more moves can be made from this position, move on to the next position.
  if (s[i] === '(') max = Math.max(max, backtrack(s, i + 1, score, tempScore, used));
  return max;
}
console.log(maxScore('()()'));  // Output: 3


const s = '(())()';

console.log(bracketScorer(s));