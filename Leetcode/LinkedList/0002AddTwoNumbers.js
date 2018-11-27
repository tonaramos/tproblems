/*
  Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 

  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}
 */

function ListNode (val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function(l1, l2) {
  
  let pointerOne = l1;   //these are pointers and the nodes that will be overwritten.
  let pointerTwo = l2;
 
  const headPointer = new ListNode(null);  // is this the last node to be added?
  let previousPointer = headPointer;     // the parent node of prev
  let carry = false;                 // the flag to add one to the next node every time
  while (pointerOne || pointerTwo) {                              // while recursive loop while one of the two lists still has nodes left
    let current = pointerOne != null ? pointerOne : pointerTwo;   // this will rewrite one either node to make it part of the new list
    let val1 = pointerOne != null ? pointerOne.val : 0;           // if the node exist the value is given to val1 and val 2
    let val2 = pointerTwo != null ? pointerTwo.val : 0;           
    let val3 = carry ? 1 : 0;                                     // will add one depending on the previous sum
    let sum = val1 + val2 + val3;
    if (sum > 9) {                                                // will flag to carry a number
      sum = sum - 10;
      carry = true;
    } else  {
      carry = false;                                              // reset to false incase previous pass was true
    }
    current.val = sum;                    // rewrites current node value
    previousPointer.next = current;       // rewrites what what the previousPointer is pointing to to the rest of the list with the updated node value
    previousPointer = previousPointer.next;  // moves the pointer of the current node for loop to the next node
    if (pointerOne) pointerOne = pointerOne.next;  // these move the pointers to the next node
    if (pointerTwo) pointerTwo = pointerTwo.next;
  }
  if (carry) {                              // once at the end of the list (the start of the number to be returned)
    previousPointer.next = new ListNode(1); // this adds a node of value one to the previous node. 
  }
  return headPointer.next;                  // returns the second link in the list created since the first has no val. 
};

