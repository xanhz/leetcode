import { TreeNode } from '../../data-structures';

/**
 * @link https://leetcode.com/problems/average-of-levels-in-binary-tree
 */
function averageOfLevels(root: TreeNode | null): number[] {
  if (root == null) {
    return [];
  }
  const stacks: TreeNode[][] = [[], []];
  const result: number[] = [];
  let turn = 0;
  stacks[turn].push(root);
  while (stacks[0].length || stacks[1].length) {
    const currStack = stacks[turn % 2];
    const nextStack = stacks[(turn + 1) % 2];
    let sum = 0,
      count = 0;
    while (currStack.length) {
      const node = currStack.pop() as TreeNode;
      sum += node.val;
      ++count;
      node.left && nextStack.push(node.left);
      node.right && nextStack.push(node.right);
    }
    ++turn;
    result.push(sum / count);
  }

  return result;
}

console.log(averageOfLevels(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
