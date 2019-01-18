const plusOne = require('./0066PlusOne.js');

// test('*TEST NAME*', () => {
//   expect('*FUNC*'('*args*')).toBe('*result*');
// });

let input = [1,2,3];
let output = [1,2,4];

test('Returns an array', () => {
  expect(Array.isArray(plusOne(input))).toBe(true)
});

test('Returns the correct solution for [1,2,3]', () => {
  expect(plusOne(input)).toEqual(output)
});

test('Returns the correct solution for [0]', () => {
  input = [0];
  output = [1];
  expect(plusOne(input)).toEqual(output)
});

test('Returns the correct solution for [9,9,9]', () => {
  input = [9,9,9];
  output = [1,0,0,0];
  expect(plusOne(input)).toEqual(output)
});

test('Returns the correct solution for [1,0,0,0,0,1,0,9]', () => {
  input = [1,0,0,0,0,1,0,9];
  output = [1,0,0,0,0,1,1,0];
  expect(plusOne(input)).toEqual(output)
});

test('Returns the correct solution for [1,0,0,0,0,1,0,0,0]', () => {
  input = [1,0,0,0,0,1,0,0,0];
  output = [1,0,0,0,0,1,0,0,1];
  expect(plusOne(input)).toEqual(output)
});