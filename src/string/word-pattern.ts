/**
 * @link https://leetcode.com/problems/word-pattern
 */
function wordPattern(pattern: string, s: string): boolean {
  const words = s.trim().split(' ');
  if (pattern.length != words.length) {
    return false;
  }

  const mapPattern2Word = new Map<string, string>();
  const mapWord2Pattern = new Map<string, string>();
  for (let i = 0; i < pattern.length; ++i) {
    const currPattern = pattern[i];
    const currWord = words[i]
    const mappedWord = mapPattern2Word.get(currPattern);
    const mappedPattern = mapWord2Pattern.get(currWord);
    if (mappedWord && mappedWord != currWord) {
      return false;
    }
    if (mappedPattern && mappedPattern != currPattern) {
      return false;
    }
    mapPattern2Word.set(currPattern, currWord);
    mapWord2Pattern.set(currWord, currPattern);
  }
  return true;
};