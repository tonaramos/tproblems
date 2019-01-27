/*
984. String Without AAA or BBB
Given two integers A and B, return any string S such that:
S has length A + B and contains exactly A 'a' letters, and exactly B 'b' letters;
The substring 'aaa' does not occur in S;
The substring 'bbb' does not occur in S.

Example 1:
Input: A = 1, B = 2
Output: "abb"
Explanation: "abb", "bab" and "bba" are all correct answers.

Example 2:
Input: A = 4, B = 1
Output: "aabaa"

Note:
0 <= A <= 100
0 <= B <= 100
It is guaranteed such an S exists for the given A and B.
*/

const strWithout3a3b = (A, B) => {
  let output = '';
  let lchar = 'a'; 
  let schar = 'b'; 
  let longest = A;
  let shortest = B;
  if (B > A){
    longest = B;
    shortest = A;
    lchar = 'b';
    schar = 'a';
  } 
  while ((longest > 0 || shortest > 0) && longest + shortest !== 0) {
    if (longest === shortest) {
      if (longest) {
        output = output + lchar;
        longest--;
      }
      if (shortest) {
        output = output + schar;
        shortest--;
      }
    } else {
      if (longest > 1) {
        output = output + lchar + lchar;
        longest = longest - 2;
      } else {
        output = output + lchar;
        longest = longest - 1;
      }
      if (shortest) {
        output = output + schar;
        shortest--;
      }
    }
  }
  return output;
};