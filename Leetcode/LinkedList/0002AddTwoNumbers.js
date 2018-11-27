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

var addTwoNumbers = function(l1, l2) {
  
  let pointerOne = l1;   
  let pointerTwo = l2;
 
  const headPointer = new ListNode(null);  
  let previousPointer = headPointer;     
  let carry = false;                 
  while (pointerOne || pointerTwo) {                              
    let current = pointerOne != null ? pointerOne : pointerTwo;   
    let val1 = pointerOne != null ? pointerOne.val : 0;           
    let val2 = pointerTwo != null ? pointerTwo.val : 0;           
    let val3 = carry ? 1 : 0;                                     
    let sum = val1 + val2 + val3;
    if (sum > 9) {                                                
      sum = sum - 10;
      carry = true;
    } else  {
      carry = false;                                              
    }
    current.val = sum;                    
    previousPointer.next = current;       
    previousPointer = previousPointer.next;  
    if (pointerOne) pointerOne = pointerOne.next;  
    if (pointerTwo) pointerTwo = pointerTwo.next;
  }
  if (carry) {                              
    previousPointer.next = new ListNode(1); 
  }
  return headPointer.next;                  
};
