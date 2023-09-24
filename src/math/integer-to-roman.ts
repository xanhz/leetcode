/**
 * @link https://leetcode.com/problems/integer-to-roman
 */
function intToRoman(num: number): string {
  const map = new Map([
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ]);
  let result = '';
  for (const [key, value] of map.entries()) {
    while (num >= value) {
      num -= value;
      result += key;
    }
  }
  return result;
}

console.log(intToRoman(3) == 'III');
console.log(intToRoman(58) == 'LVIII');
console.log(intToRoman(1994) == 'MCMXCIV');
