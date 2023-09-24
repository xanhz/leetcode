import { ListNode } from '../data-structures';

/**
 * @link https://leetcode.com/problems/merge-two-sorted-lists
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let mergedList = null, prevNode = null, currNode = null;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      currNode = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      currNode = new ListNode(list2.val);
      list2 = list2.next;
    }
    if (!prevNode) {
      mergedList = currNode;
      prevNode = mergedList;
    } else {
      prevNode.next = currNode;
      prevNode = currNode;
    }
  }

  while (list1) {
    currNode = new ListNode(list1.val);
    if (!prevNode) {
      mergedList = currNode;
      prevNode = mergedList;
    } else {
      prevNode.next = currNode;
      prevNode = currNode;
    }
    list1 = list1.next;
  }

  while(list2) {
    currNode = new ListNode(list2.val);
    if (!prevNode) {
      mergedList = currNode;
      prevNode = mergedList;
    } else {
      prevNode.next = currNode;
      prevNode = currNode;
    }
    list2 = list2.next;
  }

  return mergedList;
};
