/*
101. Symmetric Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3

But the following [1,2,2,null,3,null,3] is not:
    1
   / \
  2   2
   \   \
   3    3
*/


const isSymmetric = (root) => {
    //traverse the array and create an array
    
    

    const traverse = node => {
      let output = [];

      const func = val => output.push(val);

      let queue = [];   //this is to push the nodes in breadth order
      queue.push(node);   
      while (queue.length) {
        let currentNode = queue.shift();
          if (currentNode.left || currentNode.right) {
            if (currentNode.left) {
              queue.push(currentNode.left);
            } else {
              queue.push({val: null});
            }
            if (currentNode.right){
              queue.push(currentNode.right);
            } else {
              queue.push({val: null});
            }
          }
        func(currentNode.val);
        // console.log('queue-> ', queue, ' output-> ', output);
      }
      return output;      
    }

    let arr = traverse(root);
    console.log(arr);

    while (arr.length > 1) {
      let str
    }


   



    return true;
};

let input = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};

let input2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: null,
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
};

console.log(isSymmetric(input));
console.log(isSymmetric(input2));
