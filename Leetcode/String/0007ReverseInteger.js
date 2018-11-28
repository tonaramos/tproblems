/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21

Assume we are dealing with an environment which could only store integers within the 
32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, 
assume that your function returns 0 when the reversed integer overflows.

  @param {number} x
  @return {number}
 */
var reverse = function(x) {
let num = Math.abs(x).toString().split('').reverse().join('')*Math.sign(x);
return (num < 2147483646 || num > -2147483647) ? num : 0;
};

console.log(reverse(5123));
console.log(reverse(-623));
console.log(reverse(123));
console.log(reverse(0000187));
console.log(reverse(-123));
console.log(reverse(0120))