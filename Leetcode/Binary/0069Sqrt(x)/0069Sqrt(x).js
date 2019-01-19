var mySqrt = function(x) {
  let output = Math.floor(x/2);
      while (output*output > x) {
          output = Math.floor(output/2);
      }
      while(!(((output+1)*(output+1))>x)){
          output++;
      }
      return output;
  };

  console.log(mySqrt(8));