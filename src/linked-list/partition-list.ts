import { ListNode } from '../data-structures';

/**
 * @link https://leetcode.com/problems/partition-list
 */
function partition(head: ListNode | null, x: number): ListNode | null {
  let lt = new ListNode(Number.NaN);
  let gte = new ListNode(Number.NaN);
  let dummyLt = lt;
  let dummyGte = gte;

  let node = head;
  while (node != null) {
    if (node.val < x) {
      lt.next = node;
      lt = lt.next;
    } else {
      gte.next = node;
      gte = gte.next;
    }
    let next = node.next;
    node.next = null;
    node = next;
  }

  if (isNaN(lt.val)) {
    return dummyGte.next;
  }

  lt.next = dummyGte.next;

  return dummyLt.next;
}
