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
  if (len === 0 || len ===1 ) {             
    return len;
  }
  let longest = 1;                          
  let start = 0;                            
  
  for (let i=0; i<len; i++ ) {              
    const curr = s[i];                    
    const index = s.indexOf(curr, start);   
    if ( index >= start && index < i) {     
                                            
      start = index + 1;                    
    } else {
      longest = Math.max(longest, i - start +1);  
    }                                             
  }
  return longest;
};
