/*
20. Valid Parentheses

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
 */


const isValid = function(s) {
  let stack = [];
  const open = {
    '(': true,
    '[': true,
    '{': true,
  };
  const close = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  // console.log('input s -> ', s);
  for (let i = 0; i < s.length; i ++) {
    // console.log('stackBefore ->', stack);
    if (open[s[i]]) {
      stack.push(s[i]);
    }
    // console.log('last item in stack-> ', stack[stack.length-1]);
    // console.log('close[s[i]] === stack[stack.length-1])==>', close[s[i]] === stack[stack.length-1]);
    if (close[s[i]] && (close[s[i]] === stack[stack.length-1])) {
      stack.pop();
    }
    // console.log('stackAfter ->', stack);
  }
  return stack.length === 0 ? true : false;
}

// const str1 = '{[]}';
// const str2 = '{}[]';
// const str3 = '{{]]';
// const str4 = '{}[';
// console.log(isValid(str1));
// console.log(isValid(str2));
// console.log(isValid(str3));
// console.log(isValid(str4));