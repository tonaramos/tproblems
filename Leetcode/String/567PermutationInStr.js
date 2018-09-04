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


//  ====== Initial Attempt =======
// var checkInclusion = function(s1, s2) {
//   if (s1.length > s2.length || s2.length === 0) {
//     return false
//   }
//   let start = 0;
//   if (s1.length <= 2) {
//     while (start + s1.length <= s2.length) {
//       if (s1 === s2.slice(start, start + s1.length) || s1.split('').reverse().join('') === s2.slice(start, start + s1.length)) {
//         return true;
//       }
//       start++;
//     }
//   }
//   const allPermutations = function (str) {
//     const storage = [];
//     if (str.length === 1) {
//       storage.push(str);
//       return storage;
//     }
//     for (let i = 0; i <  str.length; i++) {
//       let firstChar = str[i];
//       // let lastChars = str.substring(i+1);
//       let charsLeft = str.substring(0,i) + str.substring(i+1);
//       let innerPermutations = allPermutations(charsLeft);
//       for (let j = 0; j < innerPermutations.length; j++) {
//         storage.push(firstChar + innerPermutations[j]);
//       }
//     }
//     return storage;
//   }
//   const storage = allPermutations(s1);
//   if (s1.length > 2) {
//     while (start + s1.length <= s2.length) {
//       if (storage.includes(s2.slice(start, start + s1.length))) {
//         return true;
//       }
//       start++;
//     }
//   }
//   return false;
// };

var checkInclusion = function(s1, s2) {
  if (s2.length < s1.length || s2.length == 0) {    //if s1 is longer than s2 or if s2 length is zero return false
    return false;
  }
  const hashMap = {};                               
  const len = s1.length;
  for (let i = 0; i < len; ++i) {                 //traverse s1
    if (!hashMap[s1[i]]) {                      //if the char doesn't exist in hashmap, add it with a 0 value
        hashMap[s1[i]] = 0;
    }
    if (!hashMap[s2[i]]) {                      //if any letter from s2 doesn't exist in hashMap, added as well with a 0 value
        hashMap[s2[i]] = 0;
    }
    hashMap[s1[i]]++;                           //for each letter from s1 add one count in hasMap
    hashMap[s2[i]]--;                           //subtract one from any letter in hashMap that is in s2
                                                      //here if it is a value in s2 that we don't want then it will go to -1
                                                      //if the values match it goes straight to 0
                                                      //if is a value that we want and is not in order it goes to 0 as we traverse
  }
     
  if (isAllZero(hashMap)) {                       //this only checks id the s1 and s2 have the same letters in the first s1.length elements
    return true;
  }

  for (let i = len; i < s2.length; ++i) {       //travel the rest of s2 after the s1.length index
    if (!hashMap[s2[i]]) {                      //if a letter from the rest of s2 is not in hash map add it with a 0
      hashMap[s2[i]] = 0;
    }                                           //with each iteration we traverse s2 and change the values in hashmap based on the window with length of s1
    hashMap[s2[i]]--;                           //if it is an item that we want it would have a 1 and we would switch it to 0 here    
                                                  //or if it is an item that we dont want and it was just added, its value would go to -1
    hashMap[s2[i-len]]++;
                                                //as we traverse we check for all values to have a zero, extra values get a -1 when encountered and 
                                                // values that we want should also get -1 but should already have a 1 a mark that we need them 
    if (isAllZero(hashMap)) {
        return true;
    }
  }
  return false;
};

const isAllZero = (hashMap) => {                //function to check that all values are zero
  const keys = Object.keys(hashMap);
  for (let i = 0; i < keys.length; ++i) {
      if (hashMap[keys[i]]) {                   //if there is a value other than 0 return false (any number neg or not evaluates to true, zero only evaluates to false)
          return false;                         
      }
  } 
  return true;
}
// console.log(checkInclusion('jkl','jkla'));
// console.log(checkInclusion('wer','oireyu'));
// console.log(checkInclusion('abc','bbdsbca'));
// console.log(checkInclusion(
// "trinitrophenylmethylnitramine",
//"dinitrophenyflhydrazinetrinitrophenylmethylnitramine"));
