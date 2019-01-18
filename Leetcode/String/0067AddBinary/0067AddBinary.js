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
  let indexA = a.length-1;
  let indexB = b.length-1;
  let output = '';
  let carrier = 0;
  
    while (indexA > -1 || indexB > -1) {
      if (a[indexA] === '0' && b[indexB] === '0') {
  
        if (carrier === 0) {
          output = '0' + output;
        } else {
          output = '1' + output;
          carrier = 0;
        }
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
        indexA--;
        indexB--;
      }
    }
      if (carrier === 1) {
          return '1' + output;
      }
  return output;
}

/*
const addBinary = (a, b) => {
  let p1 = a.length - 1;
  let p2 = b.length - 1;

  let rem = 0;
  let added = '';
  while (p1 >= 0|| p2 >= 0) {
    let sum = rem;
    sum += p1 >= 0 ? parseInt(a[p1]) : 0;
    sum += p2 >= 0 ? parseInt(b[p2]) : 0;

    let n = 0;
    switch(sum) {
      case 3:
        n = 1;
        rem = 1;
        break;
      case 2:
        n = 0;
        rem = 1;
        break;
      case 1:
        n = 1;
        rem = 0;
        break;
    }

    added = `${n}${added}`

    p1 -= 1;
    p2 -= 1;
  }

  return rem ? `${rem}${added}` : added;
}
*/

module.exports = addBinary;