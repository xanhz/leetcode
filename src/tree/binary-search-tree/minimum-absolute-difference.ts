import { TreeNode } from '../../data-structures';

/**
 * @link https://leetcode.com/problems/minimum-absolute-difference-in-bst
 */
function getMinimumDifference(root: TreeNode | null): number {
  let prevVal: number,
    curVal: number,
    min = Infinity;
  const recursive = (node: TreeNode | null) => {
    if (node == null) {
      return;
    }
    recursive(node.left);
    if (curVal != null) {
      prevVal = curVal;
      curVal = node.val;
      min = Math.min(min, curVal - prevVal);
    } else {
      curVal = node.val;
    }
    recursive(node.right);
  };
  recursive(root);
  return min;
}
