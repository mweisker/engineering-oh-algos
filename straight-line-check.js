// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. 
// Check if these points make a straight line in the XY plane.

// https://leetcode.com/problems/check-if-it-is-a-straight-line/

/*
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

*/


const checkStraightLine = (coordinates) => {

  let duplicate = false;

  const sortedCor = coordinates.sort((a, b) => {
    console.log(a[0])
    console.log(b[0])
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    else duplicate = true;
  })
  console.log(sortedCor)

  const difference = (sortedCor[1][1] - sortedCor[0][1]) / (sortedCor[1][0] - sortedCor[0][0]);
  let count = sortedCor[0][0];
  let current = sortedCor[0][1];
  let index = 0;

  if (!duplicate) {
    while (count <= sortedCor[sortedCor.length-1][0]) {
      console.log(count);
      console.log(current)
      console.log(coordinates[index][1])
      if (sortedCor[index][0] === count) {
        if (current !== sortedCor[index][1]) return false;
        index++;
      }
      count++;
      current += difference;
    }
    return true;
  } else {
    let all = true;
    coordinates.reduce((acc, curr) => {
      if (acc[0] !== curr[0]) all = false;
      return curr
    })
    return all;
  }

}

const graph1 = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
const graph2 = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];
const graph3 = [[1,2],[2,3],[3,5]];
const graph4 = [[1,1],[2,2],[2,0]];
const graph5 = [[0,0],[1,1],[0,-1]];
const graph6 = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];

console.log(checkStraightLine(graph6));