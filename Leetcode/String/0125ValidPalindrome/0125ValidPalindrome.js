/*
125. Valid Palindrome
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:
Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length < 2) return true;
   let temp = s.replace(/[^0-9A-Z]+/gi,'').toLowerCase();
   let p1 = 0;
   let p2 = temp.length-1;
   let mid = Math.ceil(s.length/2);
   while (p1 <= mid) {
     if (temp[p1] !== temp[p2]) {
       return false;
     }
     p1++;
     p2--
   }
   return true;
};

console.log(' null  RESULT-> ', isPalindrome(''));
console.log(' a  RESULT-> ', isPalindrome('a'));
console.log(' ra  RESULT-> ', isPalindrome('ar'));
console.log(' ra  RESULT-> ', isPalindrome('oo'));
console.log(' race a car  RESULT-> ', isPalindrome('race a car'));
console.log(' sugus  RESULT-> ', isPalindrome('sugugus'));
console.log(' sugus  RESULT-> ', isPalindrome('aaaahaaaaaaa'));
console.log(' "A man, a plan, a canal: Panama"  RESULT-> ', isPalindrome("A man, a plan, a canal: Panama"));
