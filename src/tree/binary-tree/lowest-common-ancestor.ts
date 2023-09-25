import { TreeNode } from '../../data-structures';

/**
 * @link https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
 */
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root == null || p == null || q == null) {
    return null;
  }
  const pathToP: TreeNode[] = [];
  const pathToQ: TreeNode[] = [];
  const travel = (node: TreeNode | null, p: TreeNode, q: TreeNode, path: TreeNode[]) => {
    if (node == null) {
      return;
    }
    path.push(node);
    if (node === p) {
      pathToP.push(...path);
    }
    if (node === q) {
      pathToQ.push(...path);
    }
    travel(node.left, p, q, path);
    travel(node.right, p, q, path);
    path.pop();
  };
  travel(root, p, q, []);
  const end = Math.min(pathToP.length, pathToQ.length);
  let i = 0;
  while (i < end && pathToP[i] === pathToQ[i]) {
    ++i;
  }
  return pathToP[i - 1];
}

const node1 = new TreeNode(3);
const node2 = new TreeNode(5);
const node3 = new TreeNode(1);
const node4 = new TreeNode(6);
const node5 = new TreeNode(2);
const node6 = new TreeNode(0);
const node7 = new TreeNode(8);
const node8 = new TreeNode(7);
const node9 = new TreeNode(4);

node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

node5.left = node8;
node5.right = node9;

lowestCommonAncestor(node1, node2, node9);
