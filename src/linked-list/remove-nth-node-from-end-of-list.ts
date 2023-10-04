import { ListNode } from '../data-structures';

/**
 * @link https://leetcode.com/problems/remove-nth-node-from-end-of-list
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head == null) return head;

  let fast = head;
  let slow = head;

  // move fast to n step
  while (n--) {
    // @ts-ignore
    fast = fast.next;
  }
  // fast is on n + 1 position

  // if n + 1 = list length then replace head to head.next
  if (fast == null) {
    return head.next;
  }

  // walk through rest k nodes, note that k + n + 1 = list length
  while (fast.next != null) {
    fast = fast.next;
    // @ts-ignore
    slow = slow.next;
  }
  // now slow is the (n + 1)th node from tail
  // @ts-ignore
  slow.next = slow.next.next;
  return head;
}
