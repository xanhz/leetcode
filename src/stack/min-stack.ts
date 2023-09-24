class MinStack {
  private stack: number[];
  private min: number[];

  constructor() {
    this.stack = [];
    this.min = [];
  }

  isEmpty(): boolean {
    return this.stack.length == 0;
  }

  push(val: number): void {
    if (this.isEmpty()) {
      this.min.push(val);
    } else {
      const currMin = this.min.at(-1) as number;
      const newMin = currMin > val ? val : currMin;
      this.min.push(newMin);
    }
    this.stack.push(val);
  }

  pop(): void {
    this.stack.pop();
    this.min.pop();
  }

  top(): number {
    return this.stack.at(-1) as number;
  }

  getMin(): number {
    return this.min.at(-1) as number;
  }
}

const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-3);

console.log(stack.getMin());
stack.pop();
console.log(stack.top());
console.log(stack.getMin());
