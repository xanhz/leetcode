import { TreeNode } from '../../data-structures';

/**
 * @link https://leetcode.com/problems/binary-tree-right-side-view
 */
function rightSideView(root: TreeNode | null): number[] {
  if (root == null) {
    return [];
  }
  const results: number[] = [];
  const stacks: TreeNode[][] = [[], []];
  let turn = 0;
  stacks[turn].push(root);
  while (stacks[turn].length) {
    if (turn == 0) {
      const node = stacks[0].at(-1) as TreeNode;
      results.push(node.val);
      while (stacks[0].length) {
        const node = stacks[0].pop() as TreeNode;
        node.right && stacks[1].push(node.right);
        node.left && stacks[1].push(node.left);
      }
      turn = 1;
    } else {
      const node = stacks[1][0] as TreeNode;
      results.push(node.val);
      while (stacks[1].length) {
        const node = stacks[1].pop() as TreeNode;
        node.left && stacks[0].push(node.left);
        node.right && stacks[0].push(node.right);
      }
      turn = 0;
    }
  }
  return results;
}
