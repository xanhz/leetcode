import { TreeNode } from '../../data-structures';
/**
 * @link https://leetcode.com/problems/invert-binary-tree
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) {
    return null;
  }
  invertTree(root.left);
  invertTree(root.right);
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  return root;
}
