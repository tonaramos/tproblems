/*
119. Pascal's Triangle II
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
Note that the row index starts from 0.
In Pascal's triangle, each number is the sum of the two numbers directly above it.
Example:
Input: 3
Output: [1,3,3,1]
*/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let row = [1];
  if (rowIndex === 0) return row;
  while (rowIndex) {
    let tempRow = [1];
    for (let i=0; i<row.length-1; i++) {
        tempRow.push(row[i]+row[i+1]);
    }
    tempRow.push(1);
    row = tempRow;
    rowIndex--;
  }
  return row;
};


console.log('0 - RESULT-> ', getRow(0));
console.log('1 - RESULT-> ', getRow(1));
console.log('2 - RESULT-> ', getRow(2));
console.log('3 - RESULT-> ', getRow(3));
console.log('4 - RESULT-> ', getRow(4));
console.log('5 - RESULT-> ', getRow(5));
console.log('6 - RESULT-> ', getRow(6));
console.log('7 - RESULT-> ', getRow(7));
