import { TreeNode } from '../../data-structures';

/**
 * @link https://leetcode.com/problems/sum-root-to-leaf-numbers
 */
function sumNumbers(root: TreeNode | null): number {
  let sum = 0;
  const recursive = (root: TreeNode | null, num: number) => {
    if (root == null) {
      return;
    }
    num = num * 10 + root.val;
    recursive(root.left, num);
    recursive(root.right, num);
    if (root.left == null && root.right == null) {
      sum += num;
      return;
    }
  };
  recursive(root, 0);
  return sum;
}

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(sumNumbers(root));
