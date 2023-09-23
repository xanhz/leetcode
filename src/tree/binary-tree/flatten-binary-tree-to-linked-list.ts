import { TreeNode } from '../../data-structures';

export function flatten(root: TreeNode | null): void {
  if (root == null) return;
  const leftNode = root.left;
  const rightNode = root.right;
  flatten(leftNode);
  flatten(rightNode);
  if (leftNode) {
    let bottomNodeOnLeft = leftNode;
    while (bottomNodeOnLeft.right) {
      bottomNodeOnLeft = bottomNodeOnLeft.right;
    }
    bottomNodeOnLeft.right = rightNode;
    root.right = leftNode;
    root.left = null;
  }
}

const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5, null, new TreeNode(6)));
flatten(root);
