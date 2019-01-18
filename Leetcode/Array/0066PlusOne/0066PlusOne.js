/*
66. Plus One

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list,
and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

const plusOne = (arr) => {
  if (arr[0] === 0) return [1];
  if (arr[0] === 9 && arr.length === 1) return [1,0];
  let carrier = 1;
  let index = arr.length -1;

  while (carrier === 1) {
    if (index === 0 && arr[0] === 9) {
      arr[0] = 0;
      return [1,...arr];
      break;
    }
    if (arr[index] < 9) {
      arr[index] = arr[index] + carrier;
      carrier = 0;
      return arr;
      break;
    }
    if (arr[index] === 9) {
      arr[index] = 0;
      index--;
    }
  }
  return arr;
}

module.exports = plusOne;