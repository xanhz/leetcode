/**
 * @link https://leetcode.com/problems/lru-cache
 */
interface Item {
  val: number;
  key: number;
}

class Node {
  public item: Item;
  public prev: Node | null;
  public next: Node | null;
  constructor(item: Item, prev?: Node, next?: Node) {
    this.item = item;
    this.prev = prev ?? null;
    this.next = next ?? null;
  }
}

class LRUCache {
  private readonly capacity: number;
  private readonly dummyHead: Node;
  private readonly dummyTail: Node;
  private readonly hash: Map<number, Node>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.dummyHead = new Node({ key: Number.NaN, val: Number.NaN });
    this.dummyTail = new Node({ key: Number.NaN, val: Number.NaN });
    this.dummyHead.prev = null;
    this.dummyHead.next = this.dummyTail;
    this.dummyTail.prev = this.dummyHead;
    this.dummyTail.next = null;
    this.hash = new Map();
  }

  public get(key: number): number {
    const node = this.hash.get(key);
    if (node == null) {
      return -1;
    }
    this.moveNodeToHead(node);
    return node.item.val;
  }

  public put(key: number, val: number): void {
    const node = this.hash.get(key) as Node;
    if (node == null) {
      if (this.hash.size == this.capacity) {
        const tail = this.dummyTail.prev as Node;
        const prevTail = tail.prev as Node;
        prevTail.next = this.dummyTail;
        this.dummyTail.prev = prevTail;
        this.hash.delete(tail.item.key);
      }
      const currHead = this.dummyHead.next as Node;
      const newHead = new Node({ key, val });
      currHead.prev = newHead;
      newHead.next = currHead;
      this.dummyHead.next = newHead;
      newHead.prev = this.dummyHead;
      this.hash.set(key, newHead);
    } else {
      node.item.val = val;
      this.moveNodeToHead(node);
    }
  }

  private moveNodeToHead(node: Node) {
    const prev = node.prev as Node;
    const next = node.next as Node;
    prev.next = next;
    next.prev = prev;

    const head = this.dummyHead.next as Node;
    head.prev = node;
    node.next = head;

    node.prev = this.dummyHead;
    this.dummyHead.next = node;
  }
}
