const countAndSay = require('./0038CountAndSay.js');

// test('*TEST NAME*', () => {
//   expect('*FUNC*'('*args*')).toBe('*result*');
// });

let arg1 = 1;

test('Returns a NUMBER', () => {
  expect(typeof(countAndSay(arg1))).toBe('string');
});

test('Return is not undefined', () => {
  expect(countAndSay(arg1)).toBeDefined();
});

let input = 1;
let output = '1';

test('Returns the correct result for n=1', () => {
  expect(countAndSay(input)).toEqual(output);
});


test('Returns the correct result for n=1', () => {
  input = 2;
  output= '11';
  expect(countAndSay(input)).toEqual(output);
});


test('Returns the correct result for n=1', () => {
  input = 3;
  output= '21';
  expect(countAndSay(input)).toEqual(output);
});

test('Returns the correct result for n=1', () => {
  input = 4;
  output= '1211';
  expect(countAndSay(input)).toEqual(output);
});

test('Returns the correct result for n=1', () => {
  input = 5;
  output= '111221';
  expect(countAndSay(input)).toEqual(output);
});


