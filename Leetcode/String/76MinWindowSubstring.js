/*
Initial Attempt 
var minWindow = function(s, t) {
  const tStore = {};
  let output = '';
  for (let value of t) {
    if (!tStore[value] ) {
      tStore[value] = true;
    }
  }
  const stringsStore = {};
  for (let i = 0; i<s.length; i++) {
    if (tStore[s[i]]) {
      let tempStr = '';
      let tempStorage = {};
      for (let value of t) {
        if (!tempStorage[value] ) {
          tempStorage[value] = false;
       }
      }
      for (let j = i; j < s.length; j++) {
        tempStr += s[j];
        if (tempStorage[s[j]] === false) {
          tempStorage[s[j]] = true;
        }
          if (JSON.stringify(tempStorage) == JSON.stringify(tStore)) {
          if (output.length === 0) {
            output = tempStr;
          } else if (output == tempStr) {
            return '';
          } else if ( output.length > tempStr.length) {
            output = tempStr;
          }
        }
      }
     
    } 
  }
  return output;  
};
*/

var minWindow = function(s, t) {
  if (s.length === 0 || t.length === 0) {   //check for empty arguments and return an empty string
    return '';
  }    
  const storage = {};                         //declare storage for the letters in t to look for
  for (const item of s) storage[item] = 0;    //traverse t once and add items with 0 count in storage, this will not give duplicates
  for (const item of t) storage[item] += 1;   //traverse t again counting the number of appereances of each letter in t
  let start = 0;                            //first pointer
  let end = 0;                              //second pointer
  let count = t.length;                     //the length of tß
  let max = Infinity;                       //largest number so far
  let output = s;                           //the output
  while (end < s.length) {                  //as long as the second pointer is smaller than the length of the s string, base c. 
    if (storage[s[end]] > 0) count--;         //if the letter at the 2pointer in storage count is >0 subtract one.
    storage[s[end]]--;                        //change count in storage to reduce by one
    end++;                                    //increase second pointer . the last 4 lines increase the end pointer untill the window get all the letters in than
    while (count === 0) {                     // once all the letters are covered. the count will be = 0, and enter this while loop
      if (end - start < max) {                // if the window is smaller than max size 
        max = end-start;                      // change max to the new size window
        output = s.slice(start, end)          // slice the window out of the s string and set output to it
      }
      storage[s[start]] += 1;                 // add one count to the letter in storage
      if (storage[s[start]] > 0) count++;     //if the the letter in storage has a nount larger than 0 add one to count variable. 
      start++;                                // move the first pointer over by one. 
    }
  }
  return max === Infinity ? '' : output;
};
// console.log(minWindow('ADOBECODEBANC', 'ABC'));
