/*
Given an array of integersmm return indices of the two numbers such that
they add up to a specific target.

You may assume that each input would have exactly one solution, and you may
not use the same element twice. 


*/

const twoSum = function(nums, target) {
  let obj = {};
  const output = [];
  nums.map((item, i) => {
      if (obj[target - item] !== undefined) {
          output.push(obj[target - item]);
          output.push(i)
      }
      obj[item] = i
  })
  return output;
}

const numsA = [2, 7, 11, 15];
const targetA = 9;
