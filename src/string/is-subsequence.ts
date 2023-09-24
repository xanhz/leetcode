/**
 * @link https://leetcode.com/problems/is-subsequence
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
