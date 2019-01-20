/**
70. Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
Note: Given n will be a positive integer.

Example 1:
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 */

// This solution is not the best when we can use memoization. By using recursion I make 
// unnecessary calls for results I have already obtained. 
// The result for any given steps is the addition of the steps taken to the two previous steps. 
var climbStairs = function(n) {

  /*
  create each scenario and use the results of each for the next 
  necessary n |1|1|2|3|5|8|13|21|34|
  
  */
  
  //base cases
if (n === 0) return 0;
if (n === 1) return 1;
// if (n === 2) return 2;

let twoStepsBefore = 1;
let oneStepBefore = 1;
let totalWays = 0;

for (let i=2;i<n+1; i++) {
  totalWays =  twoStepsBefore + oneStepBefore;
  twoStepsBefore = oneStepBefore;
  oneStepBefore = totalWays;
}

return totalWays;


};

console.log(climbStairs(45));

module.exports = climbStairs;