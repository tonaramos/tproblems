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

var deleteDuplicates = function(head) {
  let currentNode = head;
  let nextNode = head.next;
  while(currentNode.next){
    if (currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
};


let input = {
  val: 0,
  next: {
    val: 1,
    next: {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: {
            val: 3,
            next: {
              val: 3,
              next: null,
            },
          },
        },
      },
    },
  },
};
console.log(deleteDuplicates(input));

module.exports = deleteDuplicates;