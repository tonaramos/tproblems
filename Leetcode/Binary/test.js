const searchInsert = require('./0035SearchInsertPosition');

// test('*TEST NAME*', () => {
//   expect('*FUNC*'('*args*')).toBe('*result*');
// });

let nums = [1,2,3,5,6];
let target = 5;

test('Returns a NUMBER', () => {
  expect(typeof(searchInsert(nums, target))).toBe('number');
});


test('Not an Array', () => {
  expect(typeof(searchInsert(nums, target))).not.toBe('array');
});

test('Return is not undefined', () => {
  expect(searchInsert(nums, target)).toBeDefined();
});

test('Returns the correct index if target is found', () => {
  expect(searchInsert(nums, target)).toEqual(3);
});

test('Returns where target would be if not found',() => {
  nums = [1,3,4,6];
  target = 2;
  expect(searchInsert(nums, target)).toEqual(1);
});

test('Returns where target would be if not found - end of array',() => {
  nums = [1,3,4,6];
  target = 7;
  expect(searchInsert(nums, target)).toEqual(4);
  expect(searchInsert(nums, target)).toBeDefined();
});

test('Returns where target would be if not found - start of array',() => {
  nums = [1,3,4,6];
  target = 0;
  expect(searchInsert(nums, target)).toEqual(0);
});

test('Returns 0 if array is empty', () => {
  nums = [];
  target = 4;
  expect(searchInsert(nums, target)).toEqual(0);
});
