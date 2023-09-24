import { ListNode } from '../data-structures';

/**
 * @link https://leetcode.com/problems/add-two-numbers
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let l1Node = l1, l2Node = l2;
  let root = null, prevNode = null, currNode = null;
  let remember = 0;

  while (l1Node != null && l2Node != null) {
    const sum = l1Node.val + l2Node.val + remember;
    const digit = sum % 10;
    remember = Math.floor(sum / 10);
    currNode = new ListNode(digit);
    if (prevNode == null) {
      root = currNode;
      prevNode = root;
    } else {
      prevNode.next = currNode;
      prevNode = currNode;
    }
    l1Node = l1Node.next;
    l2Node = l2Node.next;
  }

  while (l1Node != null) {
    const sum = l1Node.val + remember;
    const digit = sum % 10;
    remember = Math.floor(sum / 10);
    currNode = new ListNode(digit);
    if (prevNode == null) {
      root = currNode;
      prevNode = root;
    } else {
      prevNode.next = currNode;
      prevNode = currNode;
    }
    l1Node = l1Node.next;
  }

  while (l2Node != null) {
    const sum = l2Node.val + remember;
    const digit = sum % 10;
    remember = Math.floor(sum / 10);
    currNode = new ListNode(digit);
    if (prevNode == null) {
      root = currNode;
      prevNode = root;
    } else {
      prevNode.next = currNode;
      prevNode = currNode;
    }
    l2Node = l2Node.next;
  }

  if (remember > 0 && prevNode) {
    prevNode.next = new ListNode(remember);
    prevNode = currNode;
  }

  return root;
};

const l1 = new ListNode(2, new ListNode(4, new ListNode(9)));
const l2 = new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))));

addTwoNumbers(l1, l2);
