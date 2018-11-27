/*
  3. Longest Substring Without Repeating Characters
  Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

  @param {string} s
  @return {number}
 */


var lengthOfLongestSubstring = function(s) {
  let len = s.length;
  if (len === 0 || len ===1 ) {             //  if the string is empty or just one return the length of it
    return len;
  }
  let longest = 1;                          //  length starts at one
  let start = 0;                            //  start pointer will increase as we move thru the string finding matching characters
  
  for (let i=0; i<len; i++ ) {              //  index of for loop will point at the char at front
    const curr = s[i];                    
    const index = s.indexOf(curr, start);   //  indexOf where current is the character to search and start is the index at which to start the search for
    if ( index >= start && index < i) {     //  this checks to see if the index of the current char is less than i, 
                                            //    if it is less than i, it means that the character appeared before, and we should increase the start point
      start = index + 1;                    //    for indexOf to start checking at
    } else {
      longest = Math.max(longest, i - start +1);  //  this will compare the longest count yet to the difference between the i and the current start point
    }                                             //    returning the largest one. 
  }
  return longest;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));