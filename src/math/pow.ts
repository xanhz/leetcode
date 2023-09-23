function myPow(x: number, n: number): number {
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return x;
  }
  if (n == -1) {
    return 1 / x;
  }
  const halfPow = myPow(x, Math.floor(n / 2));
  if (n % 2 == 0) {
    return halfPow * halfPow;
  }
  return x * halfPow * halfPow;
}

const p1 = myPow(2, 10);
const p2 = myPow(2.1, 3);
const p3 = myPow(2, -2);

console.log(p1, p2, p3)
