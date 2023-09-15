class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // helper function style

  const addHelper = (
    l1: ListNode | null,
    l2: ListNode | null,
    rem: number
  ): ListNode | null => {
    // exit condition
    if (l1 == null && l2 == null) {
      return rem != 0 ? new ListNode(rem) : null;
    }

    const val1 = l1 === null ? 0 : l1.val;
    const val2 = l2 === null ? 0 : l2.val;
    const val3 = (val1 + val2 + rem) % 10;
    let remainder = 0;
    if (val3 != val1 + val2 + rem) {
      remainder = 1;
    }
    return new ListNode(
      val3,
      addHelper(
        l1 == null ? null : l1.next,
        l2 == null ? null : l2.next,
        remainder
      )
    );
  };

  return addHelper(l1, l2, 0);
}
