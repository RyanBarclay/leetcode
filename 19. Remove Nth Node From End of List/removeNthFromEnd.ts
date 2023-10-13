/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    // Definition for singly-linked list.
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // Given the head of a linked list, remove the nth node from the end of the list and return its head.
  if (head === null) return null;

  let prev: ListNode | null = null;
  let curr: ListNode = head;

  let length = 0;

  while (curr !== null) {
    length++;
    curr = curr.next;
  }

  let target = length - n;
  curr = head;

  while (target !== 0) {
    target--;
    prev = curr;
    curr = curr.next;
  }

  if (prev === null) {
    return curr.next;
  } else {
    prev.next = curr.next;
  }

  return head;
}
