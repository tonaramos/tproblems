/*
112. Path Sum
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
Note: A leaf is a node with no children.
Example:
Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

var hasPathSum = function(root, sum) {
  if (!root) return false;
  sum -= root.val;
  if (!root.left && !root.right) {
      return sum === 0;
  }
  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
};

// var hasPathSum = function(root, sum, curr = 0) {
//   if (!root) return false;
//   if (root) {
//     if (!root.left && !root.right) {
//       if (root.val + curr === sum) {
//         return true;
//       }
//       if (root.val + curr !== sum) {
//         return false;
//       }
//     }
//     return hasPathSum(root.left, sum, curr + root.val) || hasPathSum(root.right, sum, curr + root.val)
//   }
// };

module.exports = hasPathSum;