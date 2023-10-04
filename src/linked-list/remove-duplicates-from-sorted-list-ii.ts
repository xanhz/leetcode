import { ListNode } from '../data-structures';
import { createLinkedList, printList } from '../utils/linked-list';

/**
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
  let dummy = null;
  let prev = null;
  let node = head;
  while (node != null) {
    let start = node;
    let end = node;
    while (end.next != null && end.next.val == start.val) {
      end = end.next;
    }
    if (prev == null) {
      if (start === end) {
        dummy = start;
        prev = start;
      }
    } else {
      if (start !== end) {
        prev.next = null;
      } else {
        prev.next = node;
        prev = prev.next;
      }
    }
    node = end.next;
  }

  return dummy;
}

let head = createLinkedList([1, 2, 3, 3, 4, 4, 5]);
printList(deleteDuplicates(head));

head = createLinkedList([1, 1, 1, 2, 3]);
printList(deleteDuplicates(head));
