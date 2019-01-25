/*
108. Convert Sorted Array to Binary Search Tree
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:
Given the sorted array: [-10,-3,0,5,9],
One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
      0
     / \
   -3   9
   /   /
 -10  5
*/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var sortedArrayToBST = function(nums) {
  if(!nums.length) return null;
  const midpoint = Math.floor((nums.length-1)/2)
  let tree = new TreeNode(nums[midpoint]);
  tree.left = sortedArrayToBST(nums.slice(0, midpoint))
  tree.right = sortedArrayToBST(nums.slice(midpoint+1))
  return tree;
 }

input = [];
console.log(sortedArrayToBST(input))

input = [5];
console.log(sortedArrayToBST(input))

input = [1,3];
console.log(sortedArrayToBST(input))

input = [10,11,12];
console.log(sortedArrayToBST(input))

input = [-8,-7,-5,-4];
console.log(sortedArrayToBST(input))

input = [18,19,20,21,22];
console.log(sortedArrayToBST(input))

console.log('RESULT -> ', sortedArrayToBST(input))