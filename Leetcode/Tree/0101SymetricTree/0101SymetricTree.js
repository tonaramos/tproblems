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
  if (!root) return true;

  const compare = (p,q) => {
    if (!p && !q) { 
      return true;   
    }
    if (!p || !q || p.val !== q.val) {
      return false;
    }
    return compare(p.left, q.right) && compare(p.right, q.left);
  }
  return compare(root.left, root.right);
}


let input = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
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
