/*
141. Linked List Cycle
Given a linked list, determine if it has a cycle in it.
To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Example 2:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Example 3:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

Follow up:
Can you solve it using O(1) (i.e. constant) memory?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  //while not reaching null travel the list with two pointers at differnt speed 
  //compare values if values are the same then the is a list cycle
  if (!head || !head.next) return false;
  let next = false;
  let curr = head;
  let curr2 = head.next.next;
  let count = 0
    while (true) {
      count
      if (!curr || !curr2) {
        console.log('here', count)
        return false;  
      }
      if (curr2.next === null) { 
        console.log('touched 1stIF');
        return false;
      }
      if (curr.val === curr2.val) { 
        console.log('touched 2ndIF');
        return true;
      }
      if (next) {    
        console.log('here', count);
        curr = curr.next;
      }
      curr2 = curr2.next;
      next = !next;
    }
};

let list = null;
console.log('false case RESULT -> ', hasCycle(list));
let list1 = {val: 10, next:null};
console.log('false 1node case RESULT -> ', hasCycle(list1));
let list2 = {val: 11, next:{val: 12, next:null}};
console.log('false 1node case RESULT -> ', hasCycle(list2));

let node1 = {val: 1, next: null}
let node2 = {val: 2, next: null}
let node3 = {val: 3, next: null}
let node4 = {val: 4, next: null}
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = list2;

console.log('lalist->',  node1);
console.log('cycle - true 1+ nodes case RESULT -> ', hasCycle(node1));

node4.next = list2;
console.log('no cycle = false 1+ nodes case RESULT -> ', hasCycle(node1));
