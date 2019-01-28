const generate = (numRows) => {
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
