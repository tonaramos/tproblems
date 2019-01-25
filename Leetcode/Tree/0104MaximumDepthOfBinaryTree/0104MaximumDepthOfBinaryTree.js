/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//       1
//      / \
//     2   2
//        /
//       3
//        \
//         4  

const maxDepth = function(root) {
  if (!root) return 0;
  const traverse = (node, level = 1) => {
    if (!node) return level;
    if (!node.left && !node.right) {
      return level;
    }
      return Math.max(Math.max(traverse(node.left, level+1), level), Math.max(traverse(node.right, level+1), level))
  }
  return traverse(root);
};

module.exports = maxDepth;