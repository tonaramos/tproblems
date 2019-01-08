/*
14. Longest Common Prefix

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

NOTE that this leetcode problem looks for prefixes that match from the beginning and does not
  look for prefixes nested in a string. ex input case not to consider => ['flower', 'relowf', 'ow'];


 */


var longestCommonPrefix = function(strs) {
  if (strs === undefined || strs.length === 0) { return ''; }
  
  return strs.reduce((prev, next) => {           //from reduce function initial accumulator is first str in arr 
      let i = 0;                                 //  which will be sliced and returned when char doesn't match next anymore
      while (prev[i] && next[i] && prev[i] === next[i]) i++;    
      console.log(prev.slice(0,i));
      return prev.slice(0, i);
  });
};

const arrOne = ['flower', 'flow', 'flig'];

console.log(longestCommonPrefix(arrOne));