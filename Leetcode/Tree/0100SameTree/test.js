const isSameTree = require('./0100SameTree.js');

// test('*TEST NAME*', () => {
//   expect('*FUNC*'('*args*')).toBe('*result*');
// });

let input = [1,2,3];
let output = [1,2,4];

test('Returns a boolean', () => {
  expect(typeof(isSameTree(input))).toBe('boolean');
});

// test('Returns the correct solution for [4,5,6]', () => {
//   input = [4,5,6];
//   output = [4,5,7];
//   expect(plusOne(input)).toEqual(output)
// });
