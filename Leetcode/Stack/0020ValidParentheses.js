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
  if (s.length % 2 === 1) {
      return false;
  }
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
  for (let i = 0; i < s.length; i ++) {
    if (open[s[i]]) {
      stack.push(s[i]);
    }
    if (close[s[i]] && (close[s[i]] === stack[stack.length-1])) {
      stack.pop();
    }
  }
  return stack.length === 0;
}

// Runtime: 52 ms, faster than 99.82% of JavaScript online submissions for Valid Parentheses.
