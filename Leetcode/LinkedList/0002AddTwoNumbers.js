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
/*
two non empty linked list representing two non-negative numbers. 
digists are stored in reverse order 
each node contains a single digit
Add the two numbers and return it as a linked list


ListNode { val: 2, next: ListNode { val: 4, next: ListNode { val: 3, next: null } } }
ListNode { val: 5, next: ListNode { val: 6, next: ListNode { val: 4, next: null } } }
*/


var addTwoNumbers = function(l1, l2) {
  
  const listReader = function (linkList, arr) {
    let outputArray = arr ? arr : [];
    
    outputArray.push(linkList.val);
    if (linkList.next) {
      return listReader(linkList.next, outputArray);
    } else {
      return outputArray;
    }
  };

  let arr1 = listReader(l1);
  let arr2 = listReader(l2);
  let sum = parseInt(arr1.reverse().join('')) + parseInt(arr2.reverse().join(''));
  console.log('sum-> ', sum)
  let listOutput = null;
  String(sum).split('').map(item => {
    // console.log(item);
    listOutput = { val: item, next: listOutput};
    return true;
  });
  return listOutput;
};
// test cases
  const one = { val: 2, next: { val: 4, next: { val: 3, next: null } } };
  const two = { val: 5, next: { val: 6, next: { val: 4, next: null } } };

  const three = { val: 1, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 0, next: { val: 1, next: null } } } } } } } } } } } } } } } };
  const four = { val: 5, next: { val: 5, next: { val: 5, next: null } } };;

  console.log(addTwoNumbers(one, two));     // 7 -> 0 -> 8
  console.log(addTwoNumbers(three, four));  //  6550000000000001

  /*
Did not pass a test case for input:
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
[5,6,4]

Output was:
[0,3,NaN,NaN,1]

Expected
[6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
*/
