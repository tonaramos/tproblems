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


const isHappy = (n) => {
  let str = n + '';
  let oneDigCheck = {
    0: false,
    1: true,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: true,
    8: false,
    9: false,
  };

  if (str.length === 1) {
    return oneDigCheck[str];
  }

  let dic = {
    0: 0,
    1: 1,
    2: 4,
    3: 9,
    4: 16,
    5: 25,
    6: 36,
    7: 49,
    8: 64,
    9: 81,
  };

  let sum = 0;

  for (let i=0; i<str.length; i++) {
    sum += dic[str[i]];
  
  }
  return isHappy(sum);
};
