import { TreeNode } from '../../data-structures';

// inorder: left - value - right
// postorder: left - right - value
export function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  const valueToIndex = new Map<number, number>();
  for (let i = 0; i < postorder.length; ++i) {
    valueToIndex.set(postorder[i], i);
  }

  const recursive = (inorder: number[]) => {
    if (!inorder.length) return null;

    let splitIndex = 0;
    let splitValue = inorder[splitIndex];
    let maxPostorderIndex = valueToIndex.get(splitValue) as number;

    for (let i = 1; i < inorder.length; ++i) {
      const value = inorder[i];
      const indexInPostorder = valueToIndex.get(value) as number;
      if (indexInPostorder > maxPostorderIndex) {
        splitIndex = i;
        splitValue = value;
        maxPostorderIndex = indexInPostorder;
      }
    }

    const node = new TreeNode(splitValue);
    node.left = recursive(inorder.slice(0, splitIndex));
    node.right = recursive(inorder.slice(splitIndex + 1));

    return node;
  };

  return recursive(inorder);
}

buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
