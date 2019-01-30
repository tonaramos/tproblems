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

var maxProfit = function(prices) {
  let gain = prices[1] - prices[0]  > 0 ? prices[1] - prices[0] : 0;
  let p1 = prices[0];
  for (let i=1; i<prices.length; i++) {
    p2 = prices[i]
    if (p2 < p1 ) {
      p1 = p2;
    }
    gain = p2-p1 > gain ? p2-p1 : gain;
  }
return gain;
};

let input = [];
console.log('  RESULT-> ', maxProfit(input))
input = [0];
console.log('  RESULT-> ', maxProfit(input))
input = [1];
console.log('  RESULT-> ', maxProfit(input))
input = [5,2];
console.log('  RESULT-> ', maxProfit(input))
input = [3,9];
console.log('  RESULT-> ', maxProfit(input))
input = [3,9,1,2,7,4,8];  //should be 7
console.log('  RESULT-> ', maxProfit(input))
input = [10,9,8,2,1]; // 0
console.log('  RESULT-> ', maxProfit(input))
input = [10,9,8,2,3,1]; // 1
console.log('  RESULT-> ', maxProfit(input))
input = [10,11,8,5,3,1]; // 1
console.log('  RESULT-> ', maxProfit(input))
input = [7,1,5,3,6,4]; // 5
console.log('  RESULT-> ', maxProfit(input))
input = [7,1,5,3,-6,11]; // 17
console.log('  RESULT-> ', maxProfit(input))
input = [-10,1,5,3,-3,11]; // 21
console.log('  RESULT-> ', maxProfit(input))
input = [4,1,5,3,-3,-10]; // 21
console.log('  RESULT-> ', maxProfit(input))
input = [7,6,5,2,4,3]; // 2
console.log('  RESULT-> ', maxProfit(input))