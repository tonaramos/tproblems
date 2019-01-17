const maxSubArray = require('./0053MaximumSubarray.js');

// test('*TEST NAME*', () => {
//   expect('*FUNC*'('*args*')).toBe('*result*');
// });

let input = [-2,1,-3,4,-1,2,1,-5,4];
let output = 6;

test('Returns a Number', () => {
  expect(typeof(maxSubArray(input))).toBe('number')
});

test('Maximum sum', () => {
  expect(maxSubArray(input)).toBe(6)
});