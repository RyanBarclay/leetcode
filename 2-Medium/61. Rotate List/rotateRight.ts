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
// Given the head of a linked list, rotate the list to the right by k places.
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) return head;
  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }
  tail.next = head;
  k = k % length;
  for (let i = 0; i < length - k; i++) {
    tail = tail.next;
  }
  head = tail.next;
  tail.next = null;
  return head;
}
