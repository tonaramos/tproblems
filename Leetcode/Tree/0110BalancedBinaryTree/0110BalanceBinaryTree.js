/*
110. Balanced Binary Tree
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:
Given the following tree [3,9,20,null,null,15,7]:
    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:
Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.
*/


const isBalanced = function(root) {
  const height = (node) => {
    if (node === null) return 0;
    let l = height(node.left);
    let r = height(node.right);
    if (Math.abs(l-r) > 1 || l === -1 || r === -1) return -1;
    return Math.max(l, r) + 1;
  }
  return height(root) !== -1;
};