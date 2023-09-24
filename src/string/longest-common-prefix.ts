/**
 * @link https://leetcode.com/problems/longest-common-prefix
 */
function longestCommonPrefix(strs: string[]): string {
  let lcp = '';
  for (let i = 0; i < strs[0].length; ++i) {
    for (let j = 1; j < strs.length; ++j) {
      if (strs[j].length < i || strs[j][i] != strs[0][i]) {
        return lcp;
      }
    }
    lcp += strs[0][i];
  }
  return lcp;
}

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
