import { TreeNode } from '../../data-structures';

// preorder: value - left - right
// postorder: left - right - value
export function buildTree(preorder: number[], postorder: number[]): TreeNode | null {
  const nValues = preorder.length;
  if (nValues === 0) return null;

  const mapValueToNode = new Map<number, TreeNode>();
  const mapValueToIndex = new Map<number, number>();

  for (let i = 0; i < nValues; ++i) {
    mapValueToIndex.set(postorder[i], i);
  }

  for (let i = 0; i < nValues; ++i) {
    const usedValues = new Set(mapValueToNode.keys())
    const indexInPostOrder = mapValueToIndex.get(preorder[i]) as number;
    let firstValueOnRight;
    for (let j = indexInPostOrder + 1; j < nValues; ++j) {
      if (usedValues.has(postorder[j])) {
        firstValueOnRight = postorder[j];
        break;
      }
    }
    if (firstValueOnRight == null) {
      mapValueToNode.set(preorder[i], new TreeNode(preorder[i]));
    } else {
      const node = mapValueToNode.get(firstValueOnRight) as TreeNode;
      if (node.left == null) {
        node.left = new TreeNode(preorder[i]);
        mapValueToNode.set(preorder[i], node.left);
      } else {
        node.right = new TreeNode(preorder[i]);
        mapValueToNode.set(preorder[i], node.right);
      }
    }
  }

  return mapValueToNode.get(preorder[0]) as TreeNode;
}

buildTree([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]);
