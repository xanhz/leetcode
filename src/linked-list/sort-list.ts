import { ListNode } from '../data-structures';
import { createLinkedList, printList } from '../utils/linked-list';

/**
 * @link https://leetcode.com/problems/sort-list
 */
function sortList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) {
    return head;
  }
  let list1 = head;
  let list2 = findMiddle(head);
  let temp = list2.next;
  list2.next = null;
  // @ts-ignore
  list2 = temp;

  return merge(sortList(list1), sortList(list2));
}

function findMiddle(head: ListNode) {
  let slow = head,
    fast = head.next;
  while (fast != null && fast.next != null) {
    // @ts-ignore
    slow = slow.next;
    // @ts-ignore
    fast = fast.next.next;
  }
  return slow;
}

function merge(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head = new ListNode(), dump = head;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    head = head.next;
  }
  while (list1) {
    head.next = list1;
    list1 = list1.next;
    head = head.next;
  }
  while(list2) {
    head.next = list2;
    list2 = list2.next;
    head = head.next;
  }
  return dump.next;
}

printList(sortList(createLinkedList([4, 2, 1, 3])))
