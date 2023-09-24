/**
 * @link https://leetcode.com/problems/reverse-bits
 */
function reverseBits(n: number): number {
  const bin = n.toString(2).split('').reverse().join('').padEnd(32, '0');
  return parseInt(bin, 2);
}

console.log(reverseBits(0b00000010100101000001111010011100));
