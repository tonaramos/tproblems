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
    if (nums.length === 1) return new TreeNode(nums[0]);
    if (nums.length === 2) {
      let output = new TreeNode(nums[1]);
      output.left = nums[0];
      return output;
    }
    //find midpoint
    const midpoint = nums.length%2 === 0 ? (nums.length/2) : (nums.length-1)/2;
    let tree = new TreeNode(nums[midpoint]);
    tree;
    let lp = midpoint - 1;
    let currLeftNode = tree; 
    while (lp >= 0) {
      currLeftNode.left = new TreeNode(nums[lp])
      currLeftNode = currLeftNode.left;
      lp--;
    }
    let rp = midpoint + 1;
    let currRightNode = tree; 
    while (rp < nums.length) {
      currRightNode.right = new TreeNode(nums[rp] )
      currRightNode = currRightNode.right;
      rp++;
    }
  return tree;
};

let input;

// input = [-10,-3,0,5,9];
// console.log(sortedArrayToBST(input))


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