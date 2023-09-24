import { ListNode } from '../data-structures';
import { createLinkedList } from '../utils/linked-list';

/**
 * @link https://leetcode.com/problems/merge-k-sorted-lists
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  let root = null, prevNode = null;
  let k = lists.length;
  while (true) {
    let i = -1, minValue = Infinity;
    let j = 0;
    while (j < k) {
      const node = lists[j];
      if (node && node.val < minValue) {
        i = j;
        minValue = node.val;
      } 
      ++j;
    }
    if (i == -1) {
      break;
    }
    const currentNode = new ListNode(minValue);
    if (prevNode == null) {
      root = currentNode;
      prevNode = root;
    } else {
      prevNode.next = currentNode;
      prevNode = currentNode;
    }
    // @ts-ignore
    lists[i] = lists[i].next;
  }

  return root;
}

mergeKLists([
  createLinkedList([1, 4, 5]),
  createLinkedList([1, 3, 4]),
  createLinkedList([2, 6]),
]);
