var _a;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    ListNode.prototype.print = function () {
        console.log(this.val);
        if (this.next) {
            this.next.print();
        }
    };
    return ListNode;
}());
// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
function mergeTwoLists(list1, list2) {
    var newHead = new ListNode();
    var current = newHead;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        }
        else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    if (list1) {
        current.next = list1;
    }
    if (list2) {
        current.next = list2;
    }
    return newHead.next;
}
console.log((_a = mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(4))))) === null || _a === void 0 ? void 0 : _a.print());
