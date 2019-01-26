/**
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
*/
var isBalanced = function(root, level = 1) {
  if (!root) return false;
  const traverse = (node, level = 0) => {
    if (!node) return level;
    if (!node.left && !node.right){
      return level + 1;
    } else {
      // console.log(traverse(node.left, level + 1));
      // console.log(traverse(node.right, level + 1 ));
      return Math.max(traverse(node.left, level + 1), traverse(node.right, level + 1 ));
    }
  }
  console.log('L-> ', traverse(root.left), 'R-> ', traverse(root.right), '|');
  
  return Math.abs(traverse(root.left), traverse(root.right)) < 2; 
};
// console.log
// let input;
// // []	
// console.log('0 level is false RETURN ->', isBalanced(input))

input = {val: 1, left: null, right: null };  	
// [1]	
console.log('1 level is true RETURN ->', isBalanced(input))

input = {val: 1, left:{val: 2, left: null, right: null }, right: null };  	
// [1,2]	
console.log('2 levels is true RETURN ->', isBalanced(input))

input = {val: 1, left:{val: 2, left: {val: 3, left: null, right: null }, right: {val: 3, left: null, right: null } }, right:{val: 2, left: {val: 3, left: null, right: null }, right: {val:3, left: null, right: null } } };  	
// [1,2,2,3,3,3,3]	
console.log('3 levels is False RETURN ->', isBalanced(input))

input = {val: 1, left:{val: 2, left: null, right: null }, right:{val: 2, left: {val: 3, left: null, right: null }, right: {val:3, left: null, right: null } } };  	
// [1,2,2,null,null,3,3]	
console.log('3 levels is False RETURN -> ', isBalanced(input))

input = {val: 1, left: {val: 2, left: null, right: null }, right: {val: 2, left: {val: 3, left: {val: 4, left: null, right: null }, right: null }, right: null } };  	
// [1,2,2,null,null,3,null, 4]	
console.log('4 levels False RETURN -> ', isBalanced(input));	


//  input = {val: 1, left: {val: 2, left: null, right: null }, right: {val: 2, left: {val: 3, left: null, right: {val: 4, left: null, right: null } }, right: null } };  	

// // [1,2,2,null,null,3,null,null,null,null,null,4,null,null]	


// input = {val: 1, left: {val: 2, left: null, right: null }, right: {val: 2, left:null}}

// // console.log('     ----- 4 levels A----');	

// // console.log('4 levels asymmetric-> ', isBalanced(input));

