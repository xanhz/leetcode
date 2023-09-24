import { TreeNode } from '../../data-structures';

/**
 * @link https://leetcode.com/problems/same-tree
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p != null && q != null) {
    if (p.val != q.val) {
      return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  return p == null && q == null;
}
