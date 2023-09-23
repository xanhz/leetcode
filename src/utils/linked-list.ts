import { ListNode } from '../../dist/tree/list-node';

export function createLinkedList(values: any[]) {
  const recursive = (index: number) => {
    if (index >= values.length) {
      return null;
    }
    const node = new ListNode(values[index]);
    node.next = recursive(index + 1);
    return node;
  };
  return recursive(0);
}
