/**
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none)
of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
  - Input: s = "abc", t = "ahbgdc"
  - Output: true

Example 2:
  - Input: s = "axc", t = "ahbgdc"
  - Output: false

Constraints:
  - 0 <= s.length <= 100
  - 0 <= t.length <= 10^4
  - s and t consist only of lowercase English letters.
 */
function isSubsequence(s: string, t: string): boolean {
  let sIndex = 0,
    sLength = s.length,
    tLength = t.length;
  if (s == '') {
    return true;
  }
  for (let tIndex = 0; tIndex < tLength; ++tIndex) {
    if (t[tIndex] == s[sIndex]) {
      ++sIndex;
      if (sIndex == sLength) {
        return true;
      }
    }
  }
  return false;
}

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
