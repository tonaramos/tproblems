/*
168. Excel Sheet Column Title
Given a positive integer, return its corresponding column title as appear in an Excel sheet.
For example:
    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:
Input: 1
Output: "A"

Example 2:
Input: 28
Output: "AB"

Example 3:
Input: 701
Output: "ZY"
*/
const convertToTitle = (n) => {
  const dic = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const coll = [];
  while (n !== 0) {
      let remainder = Math.floor(n/26);
    if (n > 25 && n%26 === 0) {
      coll.push(dic[25]);
      n = remainder -1;
    } else {
      const letter = dic[n%26-1];
      coll.push(letter);
      coll;
      n = remainder;
    }
  }
  coll;
  return coll.reverse().join('');
};

// console.log(convertToTitle(0));
// console.log(convertToTitle(26));
// console.log(convertToTitle(27));
// console.log(convertToTitle(28));
// //52 => AZ
console.log(convertToTitle(52));
// // 546 => tZ
console.log(convertToTitle(546));
  //  547 => UA 
console.log(convertToTitle(547));
// // 702 => ZZ
console.log(convertToTitle(702));
// // 703 => AAA
console.log(convertToTitle(703));
// 1048 => ANH
console.log(convertToTitle(1048));







// Failed attempt at recursion.. 
  // if (n !== 0) {
  //   const dic = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  //   let remainder = Math.floor(n/26);
  //   if (n > 25 && n%26 === 0) {
  //     coll.push(dic[25]);
  //     coll;
  //     remainder
  //     convertToTitle(remainder-1, coll);
  //   } else {
  //     console.log('---');
  //     remainder;
  //     const letter = dic[n%26-1];
  //     letter
  //     coll.push(letter);
  //     coll;
  //     remainder
  //     convertToTitle(remainder, coll);
  //   }
  // }