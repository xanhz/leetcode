export class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val?: number, next?: ListNode) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}
