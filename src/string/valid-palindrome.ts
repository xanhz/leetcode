/**
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
  - Input: s = "A man, a plan, a canal: Panama"
  - Output: true
  - Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
  - Input: s = "race a car"
  - Output: false
  - Explanation: "raceacar" is not a palindrome.

Example 3:
  - Input: s = " "
  - Output: true
  - Explanation: s is an empty string "" after removing non-alphanumeric characters.
  Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
- 1 <= s.length <= 2 * 10^5
- s consists only of printable ASCII characters.
 */
function isPalindrome(s: string): boolean {
  s = s.toLocaleLowerCase();
  let left = 0, right = s.length - 1;
  let regex = /[a-z0-9]/;
  while (left < right) {
    let leftIsAlpha = regex.test(s[left]), rightIsAlpha = regex.test(s[right]);

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
  s = s.trim().toLocaleLowerCase().replaceAll(/[^a-z0-9]/g, '')
  let left = 0, right = s.length - 1;
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
