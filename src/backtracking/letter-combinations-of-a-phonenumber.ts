/**
 * @link https://leetcode.com/problems/letter-combinations-of-a-phone-number
 */
function letterCombinations(digits: string): string[] {
  const n = digits.length;
  const hash: Record<string, string[]> = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };
  const result: string[] = [];

  const backtracking = (index: number, phoneNumber = '') => {
    if (index == n) {
      result.push(phoneNumber);
      return;
    }
    const digit = digits.charAt(index);
    for (const char of hash[digit]) {
      backtracking(index + 1, phoneNumber + char);
    }
  };
  n && backtracking(0);
  return result;
}

console.log(letterCombinations('23'));
