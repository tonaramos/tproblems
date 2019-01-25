let input = {val: 3, left: {val: 9, left: null, right: null}, right: {val: 20, left: {val: 15, left: null, right: null}, right: {val: 7, left: null, right: null}}}
// given-> [3,9,20,null,null,15,7]    return-> [[15,7],[9,20],[3]]

let input2 = {val: 0, left: {val: 8, left: null, right: null}, right: null};


const levelOrderBottom = (root) => {
  if (!root) return [];
  let arr = [];
  let queue = [[root]];
  while (queue.length) {
    let levelValues = [];
    let nextLevelNodes = [];
    let levelNodes = queue.shift();
    levelNodes.map(node => {
      if (node.val || node.val === 0){
        levelValues.push(node.val);
      }
      if (node.left !== null) {
        nextLevelNodes.push(node.left);
      }
      if (node.right !== null) {
        nextLevelNodes.push(node.right);
      }
    });
    arr.push(levelValues);
    if (nextLevelNodes.length > 0) {
      queue.push(nextLevelNodes);
    }
  }

  return arr.reverse();
}

module.exports = levelOrderBottom;

console.log('RESULT -> ', levelOrderBottom(input));
console.log('RESULT -> ', levelOrderBottom(input2));