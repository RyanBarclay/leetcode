// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let curr = head;
  let count = 0;

  while (curr != null && count != k) {
    curr = curr.next;
    count++;
  }

  if (count == k) {
    curr = reverseKGroup(curr, k);

    while (count-- > 0) {
      let temp = head!.next;
      head!.next = curr;
      curr = head;
      head = temp;
    }

    head = curr;
  }

  return head;
}
