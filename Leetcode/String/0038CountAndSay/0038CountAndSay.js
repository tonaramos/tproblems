/**
 38. Count and Say

The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

Note: Each term of the sequence of integers will be represented as a string.

 

Example 1:
Input: 1
Output: "1"

Example 2:
Input: 4
Output: "1211"

i-number
o-string
*/

const countAndSay = (n) => {
  let str = '1';
  let mainCount = 1;
  while (mainCount !== n) {
    let temp = '';
    let char = str[0];  //1
    let count = 1      //2
    for (let i=1; i<str.length; i++) { //i->3   str[i]->1
      if (str[i] === char) {
        count++;
      } else {
        temp = temp + count + char;
        count = 1;
        char = str[i];
      }
    }
    temp = temp + count + char;
    str = temp;
    mainCount++
  }
  return str;
}

module.exports = countAndSay;