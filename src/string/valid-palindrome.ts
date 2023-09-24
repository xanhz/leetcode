/**
 * @link https://leetcode.com/problems/valid-palindrome
 */
function isPalindrome(s: string): boolean {
  s = s.toLocaleLowerCase();
  let left = 0,
    right = s.length - 1;
  let regex = /[a-z0-9]/;
  while (left < right) {
    let leftIsAlpha = regex.test(s[left]),
      rightIsAlpha = regex.test(s[right]);

    if (leftIsAlpha && rightIsAlpha) {
      if (s[left] != s[right]) {
        return false;
      }
      ++left;
      --right;
    } else if (!leftIsAlpha) {
      ++left;
    } else if (!rightIsAlpha) {
      --right;
    }
  }
  return true;
}

function isPalindromeV2(s: string): boolean {
  s = s
    .trim()
    .toLocaleLowerCase()
    .replaceAll(/[^a-z0-9]/g, '');
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    if (s[left] != s[right]) {
      return false;
    }
    ++left;
    --right;
  }
  return true;
}

console.log(isPalindromeV2('A man, a plan, a canal: Panama'));
console.log(isPalindromeV2('race a car'));
console.log(isPalindromeV2(' '));
