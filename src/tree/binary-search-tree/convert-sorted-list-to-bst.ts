import { ListNode, TreeNode } from '../../data-structures';

function sortedListToBST(head: ListNode | null): TreeNode | null {
  const values: number[] = [];

  let listNode = head;
  while (listNode != null) {
    values.push(listNode.val);
    listNode = listNode.next;
  }

  const recursive = (values: number[], left: number, right: number) => {
    if (left >= right) return null;
    const mid = Math.floor((left + right) / 2);
    const node = new TreeNode(values[mid]);
    node.left = recursive(values, left, mid);
    node.right = recursive(values, mid + 1, right);
    return node;
  }

  return recursive(values, 0, values.length);
}
