/**
 * @link https://leetcode.com/problems/isomorphic-strings
 */
function isIsomorphic(s: string, t: string): boolean {
  const sMap = new Map<string, string>();
  const tMap = new Map<string, string>();
  for (let i = 0; i < s.length; ++i) {
    const sChar = s.charAt(i);
    const tChar = t.charAt(i);
    const sMapChar = sMap.get(sChar);
    const tMapChar = tMap.get(tChar);
    if (sMapChar && sMapChar != tChar) {
      return false;
    }
    if (tMapChar && tMapChar != sChar) {
      return false;
    }
    sMap.set(sChar, tChar);
    tMap.set(tChar, sChar);
  }
  return true;
}

console.log(isIsomorphic('egg', 'add'));
