/*
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.
Example 1:
  Input:s1 = "ab" s2 = "eidbaooo"
  Output:True
  Explanation: s2 contains one permutation of s1 ("ba").
Example 2:
  Input:s1= "ab" s2 = "eidboaoo"
  Output: False
Note:
The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
*/

const checkInclusion = (s1, s2) => {
  if (s2.length < s1.length || s2.length == 0) {    
    return false;
  }
  const hashMap = {};                               
  const len = s1.length;
  for (let i = 0; i < len; ++i) {                
    if (!hashMap[s1[i]]) {                 
      hashMap[s1[i]] = 0;
    }
    if (!hashMap[s2[i]]) {                 
      hashMap[s2[i]] = 0;
    }
    hashMap[s1[i]]++;                      
    hashMap[s2[i]]--;                                                
  }
     
  if (isAllZero(hashMap)) {  
    return true;
  }

  for (let i = len; i < s2.length; ++i) {
    if (!hashMap[s2[i]]) {
      hashMap[s2[i]] = 0;
    }                     
    hashMap[s2[i]]--;     
    hashMap[s2[i-len]]++;
    if (isAllZero(hashMap)) {
        return true;
    }
  }
  return false;
};

const isAllZero = (hashMap) => {                
  const keys = Object.keys(hashMap);
  for (let i = 0; i < keys.length; ++i) {
      if (hashMap[keys[i]]) {               
          return false;                         
      }
  } 
  return true;
};
