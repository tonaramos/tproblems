const reverseString = require('./0344ReverseString');

// test('*TEST NAME*', () => {
//   expect('*FUNC*'('*args*')).toBe('*result*');
// });

let inputA = ["h","e","l","l","o"];

let output = ["o","l","l","e","h"];

test('Returns an array', () => {
  expect(typeof(reverseString(inputA))).toBe('object');
});

test('Returns the reversed array', () => {
  expect(inputA).toEqual(output);
});


