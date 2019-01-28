/*
111. Minimum Depth of Binary Tree
Given a binary tree, find its minimum depth.

Important:
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

var minDepth = function(root) {
  if(!root) return 0;
  var result;
  function minHeight(root, depth){
      if(!root.left && !root.right){
          result = Math.min(result || depth, depth)
      }
      if(root.left) minHeight(root.left, depth + 1);
      if(root.right) minHeight(root.right, depth + 1);
  }
  minHeight(root, 1);
  return result;
};

module.exports = minDepth;