/* 
83. Remove Duplicates from Sorted List
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:
Input: 1->1->2
Output: 1->2

Example 2:
Input: 1->1->2->3->3
Output: 1->2->3
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
  var deleteDuplicates = function(head) {
  console.log(head);
  };
*/

const deleteDuplicates = function(head) {
  let l = head;
  while (l !== null && l.next !== null) {
    if(l.val === l.next.val) {
      l.next = l.next.next;
    } else {
      l = l.next;
    }
  }
  return head;
};

module.exports = deleteDuplicates;