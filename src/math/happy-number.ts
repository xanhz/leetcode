/**
 * @link https://leetcode.com/problems/happy-number
 */
function isHappy(n: number): boolean {
  const hash = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81];
  const existed = new Set<number>();
  const sumSquaredDigits = (n: number) => {
    let sum = 0;
    while (n > 0) {
      sum += hash[n % 10];
      n = Math.floor(n / 10);
    }
    return sum;
  };
  while (n != 1) {
    n = sumSquaredDigits(n);
    if (existed.has(n)) {
      return false;
    }
    existed.add(n);
  }
  return true;
}

console.log(isHappy(19));
