/*
198. House Robber
You are a professional robber planning to rob houses along a street.
Each house has a certain amount of money stashed,
the only constraint stopping you from robbing each of them is that adjacent houses
have security system connected and it will automatically contact the police
if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house,
determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:
Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.

Example 2:
Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.

*/
var rob = function(nums) {
  let prev = 0;                             // sum of the previous num
  let curr = 0;                             // max sum possible
  for(let i=0; i<nums.length; i++) {     
      let temp = curr;  
      curr = Math.max(prev+nums[i], curr);  //when checking the number at the new index we compare if 
                                              // we want to take it or the sum of the prevous number is bigger
                                                  // than taking the numnber at the new index.
      prev = temp;                           // this will be the sum from the last char taken or not taken
  }
  return curr;
};


let test1 = [1,2,3,1];
let test2 = [1,2,3,8,0,29,0,0,29];

console.log(rob(test2));