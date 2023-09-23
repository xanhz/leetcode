/**
 * Using window sliding technique
 */
function lengthOfLongestSubstring(s: string): number {
  const chars = new Set<string>();
  let fromIndex = 0;
  let maxLength = 0;
  let i = 0, length = s.length;
  while (i < length) {
    const char = s.charAt(i);
    while (chars.has(char)) {
      chars.delete(s.charAt(fromIndex));
      ++fromIndex;
    }
    chars.add(char);
    maxLength = Math.max(maxLength, i - fromIndex + 1);
    ++i;
  }
  return maxLength;
};

lengthOfLongestSubstring('abcabcbb'); // 3 -> abc
lengthOfLongestSubstring('bbbbb'); // 1 -> b
lengthOfLongestSubstring('pwwkew'); // 3 -> wke
