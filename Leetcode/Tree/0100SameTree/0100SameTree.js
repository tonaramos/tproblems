/*
100. Same Tree
Given two binary trees, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:
Input: 
     1         1
    / \       / \
   2   3     2   3

  [1,2,3],   [1,2,3]

Output: true
Example 2:
Input:
     1         1
    /           \
   2             2

[1,2],     [1,null,2]

Output: false
Example 3:

Input:
     1         1
    / \       / \
    2   1     1   2

  [1,2,1],   [1,1,2]

Output: false
*/

//this is a breadth first problem use recursion when comparing the nodes. 


const isSameTree = (p, q) => {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;

  // return true when the value is the same and 
  //   call isSameTree for the next two nodes to compare lefts and rights. 

  if ( p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
    return true;
  } else {
    return false;
  }
};

module.exports = isSameTree;