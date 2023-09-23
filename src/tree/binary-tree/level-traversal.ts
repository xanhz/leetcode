import { TreeNode } from '../../data-structures';

export function levelOrder(root: TreeNode | null): number[][] {
  if (root == null) return [];

  const rows: number[][] = [];
  let currentLevelQueue: TreeNode[] = [];
  let nextLevelQueue: TreeNode[] = [];
  currentLevelQueue.push(root);

  do {
    const columns = [];
    for (const node of currentLevelQueue) {
      const { val, left, right } = node;
      columns.push(val);
      left && nextLevelQueue.push(left);
      right && nextLevelQueue.push(right);
    }
    currentLevelQueue = nextLevelQueue;
    nextLevelQueue = [];
    rows.push(columns);
  } while (currentLevelQueue.length);

  return rows;
}
