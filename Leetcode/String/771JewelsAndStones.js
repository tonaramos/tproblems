/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "aAAbbbb"
Output: 3
Example 2:

Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.

*/

/*
 @param {string} J
 @param {string} S
 @return {number}
*/

// const numJewelsInStones = (J, S) => {
//   let storage = {};
//   J.split('').forEach(element => storage[element] = 0);
//   S.split('').forEach(item => {   
//     if (storage[item] || storage[item] === 0) {
//       storage[item] += 1;
//     }
//   });
//   return Object.keys(storage).map(item => storage[item]).reduce((accumulator, currentValue) => accumulator + currentValue);
// }

//============== Final code ==================
//  compared to the attempt above where I iterated over the longer S string twice and had to produce an array with the storage values, 
//    the code below iterates over S only once, and over J, which is shorter, multiple times. 
let numJewelsInStones = (J, S) => {
  let jewels = 0;                         
  for (let i = 0; i < S.length; i++) {
      if (J.indexOf(S[i]) !== -1) {       //  for indexOf method, if the value is not part of the J string the result is -1
          jewels++;
      }
  }
  return jewels;
};

// console.log(numJewelsInStones('z','ZZ'));
// console.log(numJewelsInStones('aA','aAAbbbb'));
