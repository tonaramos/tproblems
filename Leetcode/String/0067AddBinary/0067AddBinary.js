/**
67. Add Binary

Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

*/

const addBinary = function(a, b) {
  let count = 0;
  let indexA = a.length-1;
  let indexB = b.length-1;
  let output = '';
  let carrier = 0;
  
    while (count < a.length || count < b.length) {
      if (a[indexA] === '0' && b[indexB] === '0') {
  
        if (carrier === 0) {
          output = '0' + output;
        } else {
          output = '1' + output;
          carrier = 0;
        }
        count++;
        indexA--;
        indexB--;
      } 
  
      if ((a[indexA] === '1' && b[indexB] === '0') || (a[indexA] === '0' && b[indexB] === '1')) {
        if (carrier === 0) {
          output = '1' + output;
        } else {
          output = '0' + output;
          carrier = 1;
        }
        count++;
        indexA--;
        indexB--;
      }
  
      if (indexA >= 0 && indexB < 0) {
        if (a[indexA] === '0' && carrier === 0) {
          output = '0' + output;
        } else if (a[indexA] === '0' && carrier === 1 || a[indexA] === '1' && carrier === 0) { 
          output = '1' + output;
          carrier = 0;
        } else if (a[indexA] === '1' && carrier === 1) {
          output = '0' + output;
          carrier = 1;
        }
        count++;
        indexA--;
        indexB--;
      }
  
      if (indexB >=0 && indexA < 0) {
        if (b[indexB] === '0' && carrier === 0) {
          output = '0' + output;
        } else if (b[indexB] === '0' && carrier === 1 || b[indexB] === '1' && carrier === 0) { 
          output = '1' + output;
          carrier = 0;
        } else if (b[indexB] === '1' && carrier === 1) {
          output = '0' + output;
          carrier = 1;
        }
        count++;
        indexA--;
        indexB--;
      }
  
      if (a[indexA] === '1' && b[indexB] === '1') {    
        if (carrier === 0){
          output = '0' + output;
          carrier = 1;
        } else {
          output = '1' + output;
          carrier = 1;
        }
        count++;
        indexA--;
        indexB--;
      }
    }
      if (carrier === 1) {
          return '1' + output;
      }
  return output;
}

module.exports = addBinary;