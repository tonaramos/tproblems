/*
121. Best Time to Buy and Sell Stock
Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
Note that you cannot sell a stock before you buy one.
Example 1:
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/
// input = [3,9,1,2,7,4,8];  //should be 
var maxProfit = function(prices) {
  let p1 = prices[0] || 0;
  let p2 = prices[1] || 0;
  // let lowest = p1;
  // let highest = p2;
  // let overallGain = highest - lowest;
  let gain = Math.max(p2 - p1, 0);
  p1 = prices[1];
  // p2 = prices[1];
  for (let i=1; i<prices.length; i++) {
    // if (prices[i] < lowest) {
    //   lowest = prices[i];
    //   highest = prices[i];
    //   overallGain = Math.max(overallGain, highest - lowest);
    // }
    // if (prices[i] > highest) {
    //   highest = prices[i];
    //   overallGain = Math.max(overallGain, highest - lowest);
    // }
    if (prices[i] >= p2) {
      p2 = prices[i];
    }
      //we need to sell and reset while there are days coming up 
      /* Adding the gains from day to day is the same as waiting until reaching the highest value before it drops.
         In this solution we only add if the current day is greater than the last one. 
         and we try to have as many transactions as possible as that will yield the most gains unless the price is not
         consecutive and jumps around then we compare with the overallGain.
      */
    gain += Math.max(p2 - p1, 0);;
    p2 = prices[i];
    p1 = prices[i];
  } 
// return Math.max(gain, overallGain);
return gain; 
}

let input = [];
console.log('  RESULT-> ', maxProfit(input))
input = [0];
console.log('  RESULT-> ', maxProfit(input))
input = [1];
console.log('  RESULT-> ', maxProfit(input))
input = [5,2];
console.log('  RESULT-> ', maxProfit(input))
input = [3,9]; // should be 6
console.log('  RESULT-> ', maxProfit(input))
input = [3,9,1,2,7,4,8];  //[3,9,1,2,7,4,8]
console.log('  RESULT-> ', maxProfit(input))
input = [10,9,8,2,1]; // 0
console.log('  RESULT-> ', maxProfit(input))
input = [10,9,8,2,3,1]; // 1
console.log('  RESULT-> ', maxProfit(input))
input = [10,11,8,5,3,1]; // 1
console.log('  RESULT-> ', maxProfit(input))
 input = [7,1,5,3,6,4]; // 7
console.log('  RESULT-> ', maxProfit(input))
input = [7,1,5,3,-6,11]; // 21
console.log('  RESULT-> ', maxProfit(input))
input = [-10,1,5,3,-3,11]; // 29
console.log('  RESULT-> ', maxProfit(input))
input = [4,1,5,3,-3,-10]; // 4
console.log('  RESULT-> ', maxProfit(input))
input = [7,6,5,2,4,3]; // 2
console.log('  RESULT-> ', maxProfit(input))
