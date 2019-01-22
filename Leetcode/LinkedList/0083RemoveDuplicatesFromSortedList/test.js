const deleteDuplicates = require('./0083RemoveDuplicatesFromSortedList.js');

// test('*TEST NAME*', () => {
//   expect('*FUNC*'('*args*')).toBe('*result*');
// });

let input = 1;
let output = 1;

test('Returns a Number', () => {
  expect(typeof(deleteDuplicates(input))).toBe('number');
});

test('Returns 0 for 0 input', () => {
input = 0;
output =  0;
  expect(deleteDuplicates(input)).toEqual(output);
});

test('Returns 1 for 1 input', () => {
  input = 1;
  output =  1;
    expect(deleteDuplicates(input)).toEqual(output);
  });

test('Returns 2 for 2 input', () => {
  input = 2;
  output =  2;
    expect(deleteDuplicates(input)).toEqual(output);
  });


test('Returns 3 for 3 input', () => {
  input = 3;
  output =  3;
    expect(deleteDuplicates(input)).toEqual(output);
});
  
test('Returns 5 for 4 input', () => {
  input = 4;
  output =  5;
    expect(deleteDuplicates(input)).toEqual(output);
  });

test('Returns 8 for 5 input', () => {
  input = 5;
  output =  8;
    expect(deleteDuplicates(input)).toEqual(output);
  });