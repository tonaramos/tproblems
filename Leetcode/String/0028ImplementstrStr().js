/*
28. Implement strStr()
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/
const strStr = (haystack, needle) => {;
  if (!needle[0]) {
    return 0;
  }
  if (!haystack[0] || (needle.length > haystack.length)) {
    return -1;
  }
  if ( haystack === needle) {
    return 0;
  }

  for (let i=0; i<haystack.length-1; i++) {
    if (haystack[i] === needle[0]) {
      let tempPointer = i;
      for(let j=0; j<needle.length; j++) {
        if (haystack[tempPointer] !== needle[j]) {
          break;
        }
        if (j === needle.length-1) {
          return i;
        }
        tempPointer++;
      }
    }
  }
  return -1;
};


const test1 = 'HelloWord';
const test2 = 'helloWorllld';
const test3 = 'hello';
const test4 = 'hello';
const test5 = 'mississippi';

console.log(strStr(test1,''));
console.log(strStr(test2,'lll'));
console.log(strStr(test3,'0'));
console.log(strStr(test4,'t'));
console.log(strStr(test5,'issip'));