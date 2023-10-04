import { ListNode } from '../data-structures';

/**
 * @link https://leetcode.com/problems/reverse-linked-list-ii
 */
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (head == null || left == right) return head;
  let dummy = new ListNode(Number.NaN, head);

  let previous = dummy,
    current = head;
  for (let i = 1; i < left; ++i) {
    previous = current;
    // @ts-ignore
    current = current.next;
  }
  let leftPreviousNode = previous;
  // @ts-ignore
  previous = null;
  let nLoops = right - left + 1;
  for (let loop = 0; loop < nLoops; ++loop) {
    let nextNode = current.next;
    current.next = previous;
    previous = current;
    // @ts-ignore
    current = nextNode;
  }
  // @ts-ignore
  leftNode.next.next = current;
  // @ts-ignore
  leftNode.next = previous;
  return dummy.next;
}
