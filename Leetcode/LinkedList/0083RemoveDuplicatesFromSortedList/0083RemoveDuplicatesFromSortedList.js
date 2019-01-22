/**
 * /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * @param {ListNode} head
 * @return {ListNode}
  var deleteDuplicates = function(head) {
  console.log(head);
  };
*/

const deleteDuplicates = function(head) {
  if (!head || !head.next) return head;
  let currentNode = head;
  while(currentNode.next){
    if (currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
};

module.exports = deleteDuplicates;