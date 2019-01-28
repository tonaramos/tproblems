/*
111. Minimum Depth of Binary Tree
Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
Note: A leaf is a node with no children.
Example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
*/
var minDepth = function(root, level = 1) {
  if (!root && level === 1) return 0;
  if (!root) return level - 1;
  if (root.left || root.right) {
      return Math.min(minDepth(root.left, level + 1), minDepth(root.right, level + 1));
  } else {
    return level;
  }
};

module.exports = minDepth;