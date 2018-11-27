/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

const minWindow = (s, t) => {
  if (s.length === 0 || t.length === 0) {
    return '';
  }
  const storage = {};
  for (const item of s) storage[item] = 0;
  for (const item of t) storage[item] += 1;
  let start = 0;
  let end = 0;
  let count = t.length;
  let max = Infinity;
  let output = s;
  while (end < s.length) {
    if (storage[s[end]] > 0) count--;
    storage[s[end]]--;
    end++;
    while (count === 0) {
      if (end - start < max) {
        max = end-start;
        output = s.slice(start, end)
      }
      storage[s[start]] += 1;
      if (storage[s[start]] > 0) count++;
      start++;
    }
  }
  return max === Infinity ? '' : output;
};
