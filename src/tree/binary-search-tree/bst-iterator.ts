import { TreeNode } from '../../data-structures';

export class BSTIterator {
  private tree: number[];
  private index: number;

  constructor(root: TreeNode | null) {
    this.tree = this.inorderTraversal(root);
    this.index = 0;
  }

  private inorderTraversal(root: TreeNode | null): number[] {
    const values: number[] = [];
    const recursive = (node: TreeNode | null) => {
      if (node == null) return;
      recursive(node.left);
      values.push(node.val);
      recursive(node.right)
    }
    recursive(root);
    return values;
  }

  public next(): number {
    return this.tree[this.index++];
  }

  public hasNext(): boolean {
    const nValues = this.tree.length;
    return Boolean(nValues && this.index < nValues);
  }
}

const iterator = new BSTIterator(new TreeNode(7, new TreeNode(3), new TreeNode(15, new TreeNode(9), new TreeNode(20))));
