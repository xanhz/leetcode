import { ListNode } from '../data-structures';
import { createLinkedList } from '../utils/linked-list';

function deleteNode(node: ListNode | null): void {
  let prevNode = null, currNode = node;
  while (currNode?.next) {
    currNode.val = currNode.next.val;
    prevNode = currNode;
    currNode = currNode.next;
  }
  if (prevNode) {
    prevNode.next = null
  }
};

const list = createLinkedList([2,0,1,3]);
deleteNode(list);
