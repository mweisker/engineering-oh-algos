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

const s = '(())()';

console.log(bracketScorer(s));