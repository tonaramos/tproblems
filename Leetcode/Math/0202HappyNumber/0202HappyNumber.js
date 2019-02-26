/*
202. Happy Number
Write an algorithm to determine if a number is "happy".
A happy number is a number defined by the following process: 
Starting with any positive integer, replace the number by the sum of the squares of its digits, 
and repeat the process until the number equals 1 (where it will stay), 
or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers.
Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/


var isHappy = function(n, count = 0) {
  let dic = {
    0: 0,
    1: 1,
    2: 4,
    3: 9,
    4: 16,  //false
    5: 25,  //false
    6: 36,
    7: 49,
    8: 64,
    9: 81,  // false
  };
  let str = n + '';
  let sum = 0;

  for (let i=0; i<str.length; i++) {
    sum += dic[str[i]];
  
  }
  sum
  if (sum === 0 || sum === 2 || sum === 3 || sum === 4 || sum === 9) {
    console.log('FALSE BC last sum is -> ', sum, 'at count-> ', count)
    return false;
  }

  if (sum === 1) {
    return true;
  }

  if (count > 5000) {
    return false
  }
  // console.log(sum)
  return isHappy(sum, count+1);
};