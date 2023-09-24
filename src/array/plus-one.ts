/**
 * @link https://leetcode.com/problems/plus-one
 */
function plusOne(digits: number[]): number[] {
  let remember = 1;
  let length = digits.length;
  let i = length - 1;
  while (i >= 0) {
    let sum = digits[i] + remember;
    remember = Math.floor(sum / 10);
    digits[i] = sum % 10;
    --i;
  }
  if (remember > 0) {
    return [remember, ...digits];
  }
  return digits;
}

console.log(plusOne([9]));
console.log(plusOne([4, 3, 2, 1]));
console.log(plusOne([1, 2, 3]))