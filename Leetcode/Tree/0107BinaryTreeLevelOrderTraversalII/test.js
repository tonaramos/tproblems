const  levelOrderBottom = require('./0107BinaryTreeLevelOrderTraversalII.js');

// test('*TEST NAME*', () => {
//   expect('*FUNC*'('*args*')).toBe('*result*');
// });

test(' to be a function', () => {
  expect(levelOrderBottom).toBeInstanceOf(Function);
});

let input = null;

test('Returns a [] for a null value', () => {
  expect(levelOrderBottom(input)).toEqual([]);
});

levelOrderBottom
test('Returns 1 for a 1 level depth', () => {
  input = {val:1, left:null, right:null};
  expect(levelOrderBottom(input)).toEqual([[1]]);
});

test('Returns 2 for an symmetric 2 level depth', () => {
  input = {val:1, left:{val:2, left:null, right:null }, right:{val:2, left:null, right:null } };  // [1,2,2]
  expect(levelOrderBottom(input)).toEqual([[2, 2], [1]]);
});

test('Returns 2 for an asymmetric 2 level depth', () => {
  input = {val:1, left: null, right:{val:2, left:null, right:null } };  
  // [1,null,2]
  expect(levelOrderBottom(input)).toEqual([[2],[1]]);
});

test('Returns 3 for an symmetric 3 level depth', () => {
  input = {val: 1, left:{val: 2, left: {val: 3, left: null, right: null }, right: {val: 3, left: null, right: null } }, right:{val: 2, left: {val: 3, left: null, right: null }, right: {val:3, left: null, right: null } } };  
  // [1,2,2,3,3,3,3]
  expect(levelOrderBottom(input)).toEqual([[3,3,3,3], [2,2], [1]]);
});

test('Returns 3 for an asymmetric 3 level depth', () => {
  input = {val: 1, left: {val: 2, left: null, right: null }, right: {val: 2, left: {val: 3, left: null, right: null }, right: null } };  
  // [1,2,2,null,null,3,null]
  expect(levelOrderBottom(input)).toEqual([[3],[2,2],[1]]);
});

