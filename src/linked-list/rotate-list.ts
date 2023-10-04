import { ListNode } from '../data-structures';

/**
 * @link https://leetcode.com/problems/rotate-list
 */
function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head == null) return head;

  const getSize = (head: ListNode | null): number => {
    if (head == null) return 0;
    return 1 + getSize(head.next);
  };

  k = k % getSize(head);

  if (k == 0) return head;

  let fast = head,
    slow = head;
  // move fast to n step
  while (k--) {
    // @ts-ignore
    fast = fast.next;
  }

  // walk through rest k nodes, note that k + n = list length
  while (fast.next) {
    fast = fast.next;
    // @ts-ignore
    slow = slow.next;
  }
  const newHead = slow.next;
  slow.next = null;
  fast.next = head
  return newHead;
}
