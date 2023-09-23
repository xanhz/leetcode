class SmallestInfiniteSet {
  private deletedNumbers: Set<number>;
  private smallest: number;

  constructor() {
    this.deletedNumbers = new Set();
    this.smallest = 1;
  }

  popSmallest(): number {
    const value = this.smallest;
    do {
      ++this.smallest;
    } while (this.deletedNumbers.has(this.smallest));
    this.deletedNumbers.add(value);
    return value;
  }

  addBack(num: number): void {
    if (num < this.smallest) {
      this.smallest = num;
    }
    this.deletedNumbers.delete(num);
  }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
