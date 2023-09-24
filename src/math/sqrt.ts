/**
 * @link https://leetcode.com/problems/sqrtx
 */
function mySqrt(x: number): number {
  let left = 0,
    right = x;
  while (left <= right) {
    let mid = (left + right) >> 1;
    let midSquare = mid * mid;
    if (midSquare == x) {
      return mid;
    } else if (midSquare < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (left * left > x) {
    return left - 1;
  }
  return left;
}

console.log(mySqrt(2147483647));
