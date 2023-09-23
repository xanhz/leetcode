import { TreeNode } from '../../data-structures';

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const map = new Map<number, number>();
  for (let i = 0; i < inorder.length; ++i) {
    map.set(inorder[i], i);
  }
  const nValues = preorder.length;

  const recursive = (preFrom: number, preTo: number, inFrom: number, inTo: number) => {
    if (preFrom >= preTo || inFrom >= inTo) return null;
    
    const node = new TreeNode(preorder[preFrom]);
    const inIndex = map.get(node.val) as number;
    const nElements = inIndex - inFrom;

    node.left = recursive(preFrom + 1, preFrom + nElements + 1, inFrom, inIndex);
    node.right = recursive(preFrom + nElements + 1, preTo, inIndex + 1, inTo);
    return node;
  }

  return recursive(0, nValues, 0, nValues);
}

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
