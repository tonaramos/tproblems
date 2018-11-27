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
  let output = 0;
  let countLeft = 0;  //declare count to return
  let countRight = 0;
    //two pointers, one form each end, creating new objects every time to check for each repeated char.
    // if the chars left on the pass are less than the count stop. 
    //return the count
  let fromLeft = {};
  let fromRight = {};

  for (let i=0; i<s.length; i++ ) {
    let index = i;
    while (index < s.length && ( Object.keys(fromLeft).length === 0 || !fromLeft[s[index]])) {
      fromLeft[s[index]] = true;
      countLeft++;
      index++;
    }
    if (countLeft > output) {
      output = countLeft;
    }
    fromLeft = {};
    countLeft = 0;
  }
  return output;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("pwwkew"));