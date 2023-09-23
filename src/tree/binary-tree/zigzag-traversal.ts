import { TreeNode } from '../../data-structures';

export function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const leftToRightStack: TreeNode[] = [];
  const rightToLeftStack: TreeNode[] = [];
  const result: number[][] = [];

  let isLeftToRight = true;
  leftToRightStack.push(root);

  while (leftToRightStack.length || rightToLeftStack.length) {
    const values = [];
    if (isLeftToRight) {
      while (leftToRightStack.length) {
        const node = leftToRightStack.pop() as TreeNode;
        values.push(node.val);
        node.left && rightToLeftStack.push(node.left);
        node.right && rightToLeftStack.push(node.right);
      }
    } else {
      while (rightToLeftStack.length) {
        const node = rightToLeftStack.pop() as TreeNode;
        values.push(node.val);
        node.right && leftToRightStack.push(node.right);
        node.left && leftToRightStack.push(node.left);
      }
    }
    isLeftToRight = !isLeftToRight;
    result.push(values)
  }

  return result;
};

zigzagLevelOrder(new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(
    20,
    new TreeNode(15),
    new TreeNode(7),
  )
));
