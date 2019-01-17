/**
53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.

Example:
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another 
solution using the divide and conquer approach, which is more subtle.
*/


const maxSubArray = function(nums) {
  let res = 0;
  let max = 0;
  let min = -Infinity
  let a = nums.length;
  if (a == 1 ) return nums[0];
  for (let i = 0; i < a; i++) {
      res = res + nums[i];
      if (res > max) {
          max = res
      }
      if (res < 0) {
          res = 0;
      }  
  }
  if (max == 0) {
      for (let i = 0; i < a; i ++) {
          if (nums[i] > min) {
              min = nums[i]
          }
      }
      return min  
  }
  return max
};


module.exports = maxSubArray;