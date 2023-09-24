import { TreeNode } from '../../data-structures';

/**
 * @link https://leetcode.com/problems/minimum-absolute-difference-in-bst
 */
function getMinimumDifference(root: TreeNode | null): number {
  let min = Infinity;
  const recursive = (node: TreeNode | null) => {
    if (node == null) {
      return;
    }
    if (node.left) {
      min = Math.min(node.val - node.left.val, min);
      recursive(node.left);
    }
    if (node.right) {
      min = Math.min(node.right.val - node.val, min);
      recursive(node.right);
    }
  }
  recursive(root);
  return min;
}
