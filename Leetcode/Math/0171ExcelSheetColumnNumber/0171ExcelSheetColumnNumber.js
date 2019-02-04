const titleToNumber = (s) => {
  const dic = {
    A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26,
  };
  let multiplyBy = 1;
  let output = 0;
  for (let i=s.length-1; i>=0; i--) {
    output += dic[s[i]]*multiplyBy;
    multiplyBy = multiplyBy * 26;
  };
  return output;
};

console.log('RESULT_> ', titleToNumber("A"))
console.log('RESULT_> ', titleToNumber("Z"))
console.log('RESULT_> ', titleToNumber("AA"))
console.log('RESULT_> ', titleToNumber("AB"))
console.log('RESULT_> ', titleToNumber("UA"))
console.log('RESULT_> ', titleToNumber("ZZ"))
console.log('RESULT_> ', titleToNumber("AAA"))
console.log('RESULT_> ', titleToNumber("ANH"))
