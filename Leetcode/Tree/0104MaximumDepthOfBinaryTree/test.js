const maxDepth = require('./0104MaximumDepthOfBinaryTree.js');

// test('*TEST NAME*', () => {
//   expect('*FUNC*'('*args*')).toBe('*result*');
// });

test('maxDepth to be a function', () => {
  expect(maxDepth).toBeInstanceOf(Function);
});

let input = null;

test('Returns a 0 for a null value', () => {
  expect(typeof(maxDepth(input))).toBe('number');
});

test('Returns a number', () => {
  input = {val:1, left:null, right:null};  // [1]
  expect(typeof(maxDepth(input))).toBe('number');
});

test('Returns 1 for a 1 level depth', () => {
  expect(maxDepth(input)).toEqual(1);
});

test('Returns 2 for an symmetric 2 level depth', () => {
  input = {val:1, left:{val:2, left:null, right:null }, right:{val:2, left:null, right:null } };  // [1,2,2]
  expect(maxDepth(input)).toEqual(2);
});

test('Returns 2 for an asymmetric 2 level depth', () => {
  input = {val:1, left: null, right:{val:2, left:null, right:null } };  // [1,null,2]
  expect(maxDepth(input)).toEqual(2);
});

test('Returns 3 for an symmetric 3 level depth', () => {
  input = {val: 1, left:{val: 2, left: {val: 3, left: null, right: null }, right: {val: 3, left: null, right: null } }, right:{val: 2, left: {val: 3, left: null, right: null }, right: {val:3, left: null, right: null } } };  
  // [1,2,2,3,3,3,3]
  expect(maxDepth(input)).toEqual(3);
});

test('Returns 3 for an asymmetric 3 level depth', () => {
  input = {val: 1, left: {val: 2, left: null, right: null }, right: {val: 2, left: {val: 3, left: null, right: null }, right: null } };  
  // [1,2,2,null,null,3,null]
  expect(maxDepth(input)).toEqual(3);
});

// test('Returns false for different trees', () => {
//   let input1 = {val:1, left:{val:1, left:{val:2, left:{val:1, left:null, right:null }, right:null }, right:null }, right:null };
// // [1,2,null,1]
//   expect(maxDepth(input)).toBeFalsy();
// });