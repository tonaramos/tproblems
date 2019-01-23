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

//this is a breadth first problem

const isSameTree = (p, q) => {
    if (!p.left && q.left || !p.right && q.right) {
      return false;
    }

  const traverse = (tree) => {
    let output = [];

    const pushOrderNodes = val => {
      output.push(val);
    };

    const searchTree = (func) => {
      let queue = [tree];
      while (queue.length) {
        let currentNode = queue.shift();
        if (currentNode.left) {
          queue.push(currentNode.left)
        }
        if (currentNode.right) {
          queue.push(currentNode.right)
        }
        func(currentNode.val)
      }
    }
    
    searchTree(pushOrderNodes);

      return output;
  }

  let arr1 = traverse(p);
  let arr2 = traverse(q);

    return arr1 === arr2;
};