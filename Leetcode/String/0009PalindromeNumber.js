/*
 @param {number} x
 @return {boolean}
 */

const isPalindrome = function(x) {
  if ( x === null || x < 0) {
    return false;
  }
  let num = x;
  let reverse = 0;
  while (num !== 0) {
    let pop = num % 10;
    num = Math.trunc(num / 10);
    reverse = reverse * 10 + pop;
  };
  return x === reverse ? true : false;
};

