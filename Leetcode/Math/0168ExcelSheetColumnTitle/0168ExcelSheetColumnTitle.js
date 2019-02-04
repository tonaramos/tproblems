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
  const res = '';
  while (n !== 0) {
      let remainder = Math.floor(n/26);
    if (n > 25 && n%26 === 0) {
      coll.push(dic[25]);
      n = remainder -1;
    } else {
      coll.push(dic[n%26-1]);
      n = remainder;
    }
  }
  return coll.reverse().join('');
};
