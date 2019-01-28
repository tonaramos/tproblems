var generate = function(numRows) {
  if (numRows === 0) return [];
  let output = [[1]];
  if (numRows === 2) {
    output.push([1,1]);
  }
  while (output.length !== numRows) {
    let tempRow = [1];
    let lastRow = output[output.length-1]
      for (let i = 0;i<lastRow.length-1;i++){
        tempRow.push(lastRow[i]+lastRow[i+1]);
      }
    tempRow.push(1);
    output.push(tempRow);
  }
  return output;
};

console.log('0 rows RESULT -> ', generate(0));
console.log('1 rows RESULT -> ', generate(1));
console.log('2 rows RESULT -> ', generate(2));
console.log('3 rows RESULT -> ', generate(3));
console.log('4 rows RESULT -> ', generate(4));
console.log('5 rows RESULT -> ', generate(5));
console.log('5 rows RESULT -> ', generate(6));
