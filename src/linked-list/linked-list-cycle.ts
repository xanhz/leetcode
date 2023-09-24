import { ListNode } from '../data-structures';

/**
 * tortoise and the hare algorithm
 * Traverse linked list using two pointers.
 * Move one pointer(slow_p) by one and another pointer(fast_p) by two.
 * If these pointers meet at the same node then there is a loop. If pointers do not meet then linked list doesn’t have a loop.
 * 
 * @link https://leetcode.com/problems/linked-list-cycle
 */
function hasCycle(head: ListNode | null): boolean {
  let fast = head, slow = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    // @ts-ignore
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
