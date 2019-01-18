const addBinary = require('./0067AddBinary.js');

// test('*TEST NAME*', () => {
//   expect('*FUNC*'('*args*')).toBe('*result*');
// });

let inputA = '11';
let inputB = '1';
let output = '';

test('Returns an string', () => {
  expect(typeof(addBinary(inputA, inputB))).toBe('string');
});

test('Returns  1 when adding 0 and 1', () => {
inputA = '1';
inputB = '0';
output =  '1';
  expect(addBinary(inputA, inputB)).toEqual(output);
});

test('Returns  101 when adding 100 and 1', () => {
  inputA = '100';
  inputB = '1';
  output =  '101';
    expect(addBinary(inputA, inputB)).toEqual(output);
  });

test('Returns  101 when adding 100 and 1', () => {
  inputA = '1';
  inputB = '100';
  output =  '101';
    expect(addBinary(inputA, inputB)).toEqual(output);
  });


test('Returns  100 when adding 11 and 1', () => {
  inputA = '11';
  inputB = '1';
  output =  '100';
    expect(addBinary(inputA, inputB)).toEqual(output);
});
  
test('Returns  1100 when adding 1010 and 10', () => {
  inputA = '1010';
  inputB = '10';
  output =  '1100';
    expect(addBinary(inputA, inputB)).toEqual(output);
  });

test('Returns  1001001 when adding 110010 and 10111', () => {
  inputA = '110010';
  inputB = '10111';
  output =  '1001001';
    expect(addBinary(inputA, inputB)).toEqual(output);
  });