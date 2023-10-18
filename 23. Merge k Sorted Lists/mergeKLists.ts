class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // walk through the first element of each list
  // find min value and add to new list.
  // repeat until all lists are empty (null)
  // O(n*m) time where n is the number of lists and m is the number of elements in each list
  // O(n) space where n is the number of lists

  let newList: ListNode | null = null;
  let newListHead: ListNode | null = null;

  while (lists.some((list) => list !== null)) {
    let minNode: ListNode | null = null;
    let minNodeIndex: number = -1;

    for (let i = 0; i < lists.length; i++) {
      const node = lists[i];

      if (node !== null) {
        if (minNode === null) {
          minNode = node;
          minNodeIndex = i;
        } else {
          if (node.val < minNode.val) {
            minNode = node;
            minNodeIndex = i;
          }
        }
      }
    }

    if (minNode !== null) {
      if (newList === null) {
        newList = minNode;
        newListHead = minNode;
      } else {
        newList.next = minNode;
        newList = newList.next;
      }

      lists[minNodeIndex] = minNode.next;
      minNode.next = null;
    }
  }

  return newListHead;
}
