import { TreeNode } from '../../data-structures';

/**
 * @link https://leetcode.com/problems/symmetric-tree
 */
function isSymmetric(root: TreeNode | null): boolean {
  if (root == null) {
    return true;
  }
  return recursive(root.left, root.right);
}

function recursive(pointer1: TreeNode | null, pointer2: TreeNode | null): boolean {
  if (pointer1 != null && pointer2 != null) {
    if (pointer1.val != pointer2.val) {
      return false;
    }
    return recursive(pointer1.left, pointer2.right) && recursive(pointer1.right, pointer2.left);
  }
  return pointer1 == null && pointer2 == null;
}
