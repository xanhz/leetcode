/**
 * @link https://leetcode.com/problems/ransom-note
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
  const counter = new Map<string, number>();
  for (let i = 0; i < magazine.length; ++i) {
    const char = magazine.charAt(i);
    const val = counter.get(char) ?? 0;
    counter.set(char, val + 1);
  }
  for (let i = 0; i < ransomNote.length; ++i) {
    const char = ransomNote.charAt(i);
    const count = counter.get(char);
    if (!count) {
      return false;
    }
    counter.set(char, count - 1);
  }
  return true;
}
