// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }
// // console.log(arr)

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }

  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
  


  /*
  155. Min Stack
  Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

  */

  /**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.min= null;
};
MinStack.prototype.push = function(x) {
   this.stack.push(x);
   
   if (this.min) {
     this.min = Math.min(this.min, x);
   }  else {
     this.min = x;
   } 
};
MinStack.prototype.pop = function() {
   let removedItem = this.stack.splice(this.stack.length-1);
   if (!this.stack.length) {
     this.min = null;
   } else if (this.min === removedItem[0]) {
     this.min = this.stack.reduce((curr, acc)=> {
       return Math.min(curr,acc);
     } )
   }
};
MinStack.prototype.top = function() {
 return this.stack[this.stack.length-1];  
};
MinStack.prototype.getMin = function() {
   return this.min;
};


// Your MinStack object will be instantiated and called as such:
var obj = new MinStack();
obj.push(2147483646);
obj.push(2147483646);
obj.push(2147483647);
obj;
console.log(obj.top());
obj.pop();
obj;
console.log(obj.getMin());
obj.pop();
obj;
console.log(obj.getMin());
obj.pop();
obj;
obj.push(2147483647);
obj;
console.log(obj.top());
console.log(obj.getMin());
obj.push(-2147483648);
obj;
console.log(obj.top());
console.log(obj.getMin());
obj.pop();
obj;
console.log(obj.getMin());

// ["MinStack","push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"]
// [[],[2147483646],[2147483646],[2147483647],[],[],[],[],[],[],[2147483647],[],[],[-2147483648],[],[],[],[]]