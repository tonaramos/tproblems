/*
189. Rotate Array
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:
Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/

// Solution not working for all cases!!!!!!

var rotate = function(nums, k) {
  k = k%nums.length;
  let numsLength = nums.length;
  if (k === 0 || !numsLength) return nums;
  if (k === 1) {
    let last = nums[numsLength-1];
    for (let i=numsLength-1; i>0; i--) {
      nums[i] = nums[i-1];
    }
    nums[0] = last;
  } else if ((numsLength%2 === 0 && k%2 === 0) || ((numsLength/k)%2 === 0)) {
    for (let i=0; i<k; i++){
      let carrier = nums[i];
      let nextIndex = i;
      let count = nums.length;
      while (count > Math.floor(nums.length/2)) {
        let kIndex = (nextIndex+k) >= numsLength ? nextIndex+k-numsLength : nextIndex+k;
        let saveNext = nums[kIndex];
        saveNext;
        nums[kIndex] = carrier;
        carrier = saveNext;
        nextIndex = kIndex;
        count--;
      }
    }
  } else {
    let carrier = nums[0];
    let nextIndex = 0;
    let count = nums.length;
    while (count) {
      let kIndex = (nextIndex+k) >= numsLength ? nextIndex+k-numsLength : nextIndex+k;
      let saveNext = nums[kIndex];
      saveNext;
      nums[kIndex] = carrier;
      carrier = saveNext;
      nextIndex = kIndex;
      count--;
    }
  }
  return nums;
};

// let input = [1,2,3,4,5,6];
// console.log('RESULT -> ', rotate(input, 4));

let input = [];
console.log('RESULT -> ', rotate(input, 25));

input = [1];
console.log('RESULT -> ', rotate(input, 25));

input = [1,2,3,4];
console.log('RESULT -> ', rotate(input, 1));

input = [1,2,3,4];
console.log('RESULT -> ', rotate(input, 2));

input = [1,2,3,4];
console.log('RESULT -> ', rotate(input, 8));

input = [1,2,3,4];
console.log('RESULT -> ', rotate(input, 9));

input = [1,2,3,4];
console.log('RESULT -> ', rotate(input, 11));

input = [1,2,3,4,5,6,7];
console.log('RESULT -> ', rotate(input, 0));

input = [1,2,3,4,5,6,7];
console.log('RESULT -> ', rotate(input, 1));

input = [1,2,3,4,5,6,7];
console.log('RESULT -> ', rotate(input, 2));

input = [1,2,3,4,5,6,7];
console.log('RESULT -> ', rotate(input, 3));

input = [1,2,3,4,5,6,7];
console.log('RESULT -> ', rotate(input, 7));

input = [1,2,3,4,5,6,7];
console.log('RESULT -> ', rotate(input, 8));

input = [1,2,3,4,5,6,7];
console.log('RESULT -> ', rotate(input, 25));
