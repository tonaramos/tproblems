const hasPathSum = require('./0112PathSum.js')

test('hasPathSum to be a function', () => {
  expect(hasPathSum).toBeInstanceOf(Function);
});

let input = null;
let sum = 0;
// null
test('Return false if no root given', () => {
  expect(hasPathSum(input, sum)).toBeFalsy();
});

//[1]
test('[1] Return true if sum path exist.', () => {
  sum1 = 1;
  input = { val: 1, left: null,right: null}; 
  expect(hasPathSum(input, sum1)).toBeTruthy();
});
test('Return false if sum path does not exist.', () => {
  sum = 5;
  input = { val: 1, left: null,right: null}; 
  expect(hasPathSum(input, sum)).toBeFalsy();
});

// [1,null,2]
test('Return true if sum path exist.', () => {
  sum = 5;
  input = { val:3, left: { val:2, left:null, right:null }, right: null };  
  expect(hasPathSum(input, sum)).toBeTruthy();
});
test('Return false if sum path does not exist.', () => {
  sum = 2;
  input = { val:3, left: { val:2, left:null, right:null }, right: null };  
  expect(hasPathSum(input, sum)).toBeFalsy();
});

// [13,null,2, null, 5]
test('Return true if sum path exist.', () => {
  sum = -5;
  input = {val: -2, left: null, right: {val: -3, left: null, right: null}};  
  expect(hasPathSum(input, sum)).toBeTruthy();
});
test('Return false if sum path does not exist.', () => {
  sum = 5;
  input = {val: -2, left: null, right: {val: -3, left: null, right: null}};  
  expect(hasPathSum(input, sum)).toBeFalsy();
});

// [13,null,2, null, 5]
test('Return true if sum path exist.', () => {
  sum = 20;
  input = {val: 13, left: null, right: {val: 2, left: null, right: {val: 5, left: null, right: null}}};  
  expect(hasPathSum(input, sum)).toBeTruthy();
});
test('Return false if sum path does not exist.', () => {
  sum = 15;
  input = {val: 13, left: null, right: {val: 2, left: null, right: {val: 5, left: null, right: null}}};  
  expect(hasPathSum(input, sum)).toBeFalsy();
});

// [13,5,2,null,null,null,5]
test('Return true if sum path exist.', () => {
  sum = 25;
  input = {val: 13, left: {val: 5, left: null, right: null}, right: {val: 2, left: null, right: {val: 10, left: null, right: null}}};  
  expect(hasPathSum(input, sum)).toBeTruthy();
});
test('Return false if sum path does not exist.', () => {
  sum = 15;
  input = {val: 13, left: {val: 5, left: null, right: null}, right: {val: 2, left: null, right: {val: 10, left: null, right: null}}};  
  expect(hasPathSum(input, sum)).toBeFalsy();
});

// [13,5,2,null,null,null,5]
test('Return true if sum path exist.', () => {
  sum = 22;
  input = {val: 5, left: {val: 4, left: {val: 11, left: {val: 7, left: null, right: null}, right: {val: 2, left: null, right: null}}, right: null}, right: {val: 8, left: {val: 13, left: null, right: null}, right: {val: 4, left: null, right: {val: 1, left: null, right: null}}}};  
  expect(hasPathSum(input, sum)).toBeTruthy();
});
test('Return false if sum path does not exist.', () => {
  sum = 20;
  input = {val: 5, left: {val: 4, left: {val: 11, left: {val: 7, left: null, right: null}, right: {val: 2, left: null, right: null}}, right: null}, right: {val: 8, left: {val: 13, left: null, right: null}, right: {val: 4, left: null, right: {val: 1, left: null, right: null}}}};  
  expect(hasPathSum(input, sum)).toBeFalsy();
});
