/*
27. Remove Element

Given an array nums and a value val, remove all instances of that value in-place and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example 1:
Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length.

Example 2:
Given nums = [0,1,2,2,3,0,4,2], val = 2,

Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4.
Note that the order of those five elements can be arbitrary.
It doesn't matter what values are set beyond the returned length.

Clarification:
Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.
Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
*/


const removeElement = (nums, val) => {
  if (nums.length === 1 && nums[0] === val) {
    console.log('Exit 1');
    return [];
  }
  if (nums.length === 2) {
    if (nums[0] === val && nums[1] === val ){
      console.log('Exit 2');
      return 0;
    }
    if (nums[0] === val && nums[1] !== val) {
      nums[0] = nums[1];
      nums[1] = val;
      console.log('Exit 3');
      return 1;
    }
    if (nums[0] !== val && nums[1] === val) {
      console.log('Exit 4');
      return 1;
    }
  }
  let count = 1;
  for(let i=0; i<nums.length-1; i++) {
    // console.log(i, 'val-> ', val);
    // console.log(nums[i], ' nums[i] === val -> ', nums[i] === val );
    if (nums[i] === val && i !== nums.length-1) {
      console.log('imhere');  
      let indexToSwap = i;
      let indexToCheck = i+1;
      let swapped = false;
      while (!swapped) {
        if ( nums[indexToSwap] !== nums[indexToCheck]) {
          let temp = nums[indexToSwap];
          nums[indexToSwap] = nums[indexToCheck];
          nums[indexToCheck] = temp;
          swapped = true;
          if (indexToCheck === nums.length-1) {
            console.log('Exit 5');
            return i+1;
          }
        } else {
          indexToCheck++;
        }
        
        if (indexToCheck >= nums.length) {
          console.log('Exit 6');
          return i;
        }
      }
      indexToSwap = nums[i];
    }
    
    console.log(i, ' nums[i]-> ', nums[i])
    // if (i === nums.length-1 && nums[i] === val){
    //   console.log('Exit 7');
    //   return i+1;
    // }
    if ( nums[i] !== val) {
      count++;
    }
    if (count === nums.length-1) {
      return count;
    }
  }
}
const test1 = [3,2,2,3];
const test2 = [0,1,2,2,3,0,4,2];
const test3 = [4,5];
const test4 = [7,8];
const test5 = [4,4,4,8];
const test6 = [2,2,2,2,3,2,2,3];
// console.log(removeElement(test1, 3), 'test1 -> ', test1);
// console.log(removeElement(test2, 2), 'test2 -> ', test2);
// console.log(removeElement(test3, 4), 'test3 -> ', test3);
// console.log(removeElement(test4, 8), 'test4 -> ', test4);
// console.log(removeElement(test5, 4), 'test5 -> ', test5);
console.log(removeElement(test6, 3), 'test6 -> ', test6);

