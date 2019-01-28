const minDepth = require('./0111MinimumDepthOfBinaryTree.js');

let input = null;

test('Returns 0 for null tree', () => {
expect(minDepth(input)).toEqual(0);
});


test('Returns 1 for tree with minDepth of 1 of 1', () => {
input = {val:1, left:null, right:null};  
// [1]
expect(minDepth(input)).toEqual(1);
});

test('Returns 1 for tree with minDepth of 1 of 2', () => {
input = {val:1, left:null, right: {val:2, left:null, right:null} };  
// [1,null,2]
expect(minDepth(input)).toEqual(1);
});

test('Returns 2 for tree with minDepth of 2 of 2', () => {
input = {val:1, left:{val:2, left:null, right:null }, right:{val:2, left:null, right:null } };  
// [1,2,2]
expect(minDepth(input)).toEqual(2);
});


test('Returns 1 for tree with minDepth of 1 of 2', () => {
input = {val:1, left: null, right:{val:2, left:{val:3, left:null, right:null}, right:null } };  
// [1,null,2,3]
expect(minDepth(input)).toEqual(1);
});


test('Returns 3 for tree with minDepth of 3 of 3', () => {
input = {val: 1, left:{val: 2, left: {val: 3, left: null, right: null }, right: {val: 3, left: null, right: null } }, right:{val: 2, left: {val: 3, left: null, right: null }, right: {val:3, left: null, right: null } } };  
// [1,2,2,3,3,3,3]
expect(minDepth(input)).toEqual(3);
});


test('Returns 2 for tree with minDepth of 2 of 3', () => {
input = {val: 1, left: {val: 2, left: null, right: null }, right: {val: 2, left: {val: 3, left: null, right: null }, right: null } };  
// [1,2,2,null,null,3,null]
expect(minDepth(input)).toEqual(2);
});

test('Returns 1 for tree with minDepth of 1 of 4', () => {
  input = {val: 1, left: null, right: {val: 2, left: {val: 3, left: null, right: {val: 4, left: null, right: null } }, right: null } };  
  // [1,null,2,null,null,3,null,null,4]
  expect(minDepth(input)).toEqual(1);
  });