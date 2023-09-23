import { TreeNode } from '../../data-structures';

// preorder: value - left - right
// postorder: left - right - value
// inorder: left - value - right
export function bstFromPreorder(preorder: number[]): TreeNode | null {
  if (!preorder.length) {
    return null;
  }
  const node = new TreeNode(preorder[0]);
  const less = [], greater = [];
  for (let i = 1; i < preorder.length; ++i) {
    if (preorder[i] < node.val) {
      less.push(preorder[i]);
    } else {
      greater.push(preorder[i]);
    }
  }
  node.left = bstFromPreorder(less);
  node.right = bstFromPreorder(greater);
  return node;
};

bstFromPreorder([8,5,1,7,10,12]);
