/**
 * @link https://leetcode.com/problems/valid-anagram
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) {
    return false;
  }
  const sCounter = new Map<string, number>();
  const tCounter = new Map<string, number>();
  for (let i = 0; i < s.length; ++i) {
    const sChar = s.charAt(i);
    const sCharCount = sCounter.get(sChar) ?? 0;
    sCounter.set(sChar, sCharCount + 1);

    const tChar = t.charAt(i);
    const tCharCount = tCounter.get(tChar) ?? 0;
    tCounter.set(tChar, tCharCount + 1);
  }

  for (const [char, sCount] of sCounter.entries()) {
    const tCount = tCounter.get(char);
    if (tCount != sCount) {
      return false;
    }
  }

  return true;
}
