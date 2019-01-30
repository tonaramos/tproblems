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
//Check previous commit for approach with out using the push/pop array methods.

const MinStack = () => {
  this.min = [];
  this.stack = [];
};
MinStack.prototype.push = (x) => {
  this.stack.push(x);
  if (this.min.length === 0 || x <= this.min[this.min.length - 1]) {
      this.min.push(x);
  }
};
MinStack.prototype.pop = () => {
  var x = this.stack.pop();
  if (x === this.min[this.min.length - 1]) {
      this.min.pop();
  }
};
MinStack.prototype.top = () => {
  return this.stack[this.stack.length - 1];
};
MinStack.prototype.getMin = () => {
  return this.min[this.min.length - 1];
};
