class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// Given a linked list, swap every two adjacent nodes and return its head.
// You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)
function swapPairs(head: ListNode | null): ListNode | null {
  let currentNode: ListNode | null = head;
  let prev: ListNode | null = null;
  for (let i = 1; currentNode != null; i++) {
    if (i % 2 === 0) {
      let temp = currentNode.val;
      currentNode.val = prev!.val;
      prev!.val = temp;
    }
    prev = currentNode;
    currentNode = currentNode.next;
  }
  return head;
}
