const isSameTree = require('./0100SameTree.js');

// test('*TEST NAME*', () => {
//   expect('*FUNC*'('*args*')).toBe('*result*');
// });

let input1 = {val:1, left:null, right:null };
let input2 = {val:1, left:null, right:null };

test('isSameTree to be a function', () => {
  expect(isSameTree).toBeInstanceOf(Function);
});

test('Returns a boolean', () => {
  expect(typeof(isSameTree(input1, input2))).toBe('boolean');
});

test('Returns true for equal trees', () => {
  expect(isSameTree(input1, input2)).toBeTruthy();
});

test('Returns false for different trees', () => {
  input2 = {val:1, left:{val:1, left:null, right:null }, right:null };
  expect(isSameTree(input1, input2)).toBeFalsy();
});