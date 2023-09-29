import { TreeNode } from '../../data-structures';

/**
 * @link https://leetcode.com/problems/validate-binary-search-tree
 */
function isValidBST(root: TreeNode | null): boolean {
  if (root == null) return true
  let prevVal: number, curVal: number;
  let isValid = true;
  const recursive = (node: TreeNode) => {
    node.left && recursive(node.left);
    if (curVal != null) {
      prevVal = curVal;
      curVal = node.val;
      if (curVal <= prevVal) {
        isValid = false;
        return;
      }
    } else {
      curVal = node.val;
    }
    node.right && recursive(node.right);
  };
  recursive(root);
  return isValid;
}

const root = new TreeNode(5, new TreeNode(4), new TreeNode(6, new TreeNode(3), new TreeNode(7)));
console.log(isValidBST(root));
