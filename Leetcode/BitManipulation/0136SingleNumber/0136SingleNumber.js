/*
136. Single Number
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:
Input: [2,2,1]
Output: 1

Example 2:
Input: [4,1,2,1,2]
Output: 4
*/


var singleNumber = function(nums) {
  let store = {};  
  for (let i=0; i<nums.length; i++) {
    if (store[nums[i]] || store[nums[i]] === 0) {
      delete store[nums[i]];
    } else {
      store[nums[i]] = nums[i];
    }
  }
  return Object.values(store)[0];
};

let arr = [2,2,1];
console.log(' [1,2,2] RESULT-> ', typeof(singleNumber(arr)));
arr = [1,2,2];
console.log(' [2,2,1] RESULT-> ', singleNumber(arr));
arr = [1,2,1,5,2];
console.log(' [2,2,1] RESULT-> ', singleNumber(arr));
arr = [2,8,2,3,3,6,6,8,0];
console.log(' [2,8,9,0,2,3,3,5,6,1,6,8,9,0] RESULT-> ', singleNumber(arr));
