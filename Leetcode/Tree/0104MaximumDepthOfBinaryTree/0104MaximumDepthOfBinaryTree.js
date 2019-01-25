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
  const traverse = async (node, level = 1) => {
      if (!node.left && !node.right) {
        // console.log('return of level at l->', level, )
        return level;
      }
      let l;
      let r;
      if (node.left) {
        // console.log('checked left @ level-> ', level)  
        let nextLevel = await traverse(node.left, level+1);
          l = nextLevel > level ? nextLevel : level;
      }
      if (node.right) {
        // console.log('checked right @ level-> ', level)  
        let nextLevel = await traverse(node.right, level+1);
          r = nextLevel > level ? nextLevel : level;
      }
      console.log('return at level-> ', level, ' with r->', r, ' l->', l);
        const compare = (a, b) => {
          return a > b ? a : b; 

        } 
      return compare( l, r);
  }
  
  traverse(root).then(res => console.log(res));
  
 
};

let input = {val:1, left: null,  right: null };  
// [1,2,2]
// console.log('1 level-> ', maxDepth(input));

input = {val:1, left:{val:2, left:null, right:null }, right:{val:2, left:null, right:null } };  
// [1,2,2]
// console.log('2 levels-> ', maxDepth(input));

input = {val: 1, left: null, right:{val: 2, left: null, right: null } };  
// [1,null,2]
// console.log('2 levels asymmetric-> ', maxDepth(input));

input = {val: 1, left:{val: 2, left: {val: 3, left: null, right: null }, right: {val: 3, left: null, right: null } }, right:{val: 2, left: {val: 3, left: null, right: null }, right: {val:3, left: null, right: null } } };  
// [1,2,2,3,3,3,3]
console.log('     ----- 3 levels ----');
// console.log('3 levels-> ', maxDepth(input));
console.log('The RETURNED VALUE -> ', maxDepth(input))

input = {val: 1, left: {val: 2, left: null, right: null }, right: {val: 2, left: {val: 3, left: null, right: null }, right: null } };  
// [1,2,2,null,null,3,null]
console.log('     ----- 3 levels A----');
// console.log('3 levels asymmetric-> ', maxDepth(input));

input = {val: 1, left: {val: 2, left: null, right: null }, right: {val: 2, left: {val: 3, left: null, right: {val: 4, left: null, right: null } }, right: null } };  
// [1,2,2,null,null,3,null,null,null,null,null,4,null,null]
//       1
//      / \
//     2   2
//        /
//       3
//        \
//         4     
// console.log('     ----- 4 levels A----');
console.log('4 levels asymmetric-> ', maxDepth(input));


module.exports = maxDepth;