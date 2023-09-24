class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;
  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @link https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii
 */
function connect(root: Node | null): Node | null {
  if (root == null) {
    return root;
  }
  let stack: Node[] = [];
  stack.push(root);
  while (stack.length) {
    let prev = null;
    let tempStack: Node[] = [];
    while (stack.length) {
      const node = stack.pop() as Node;
      node.next = prev;
      prev = node;
      node.right && tempStack.push(node.right);
      node.left && tempStack.push(node.left);
    }
    stack = tempStack.reverse();
  }
  return root;
}

connect(new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3, undefined, new Node(7))));
