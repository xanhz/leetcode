/**
 * @link https://leetcode.com/problems/group-anagrams
 */
function groupAnagrams(strs: string[]): string[][] {
  const n = strs.length;
  const copies = strs.map(str => str.split('').sort().join(''));
  const map = new Map<string, string[]>();
  for (let i = 0; i < n; ++i) {
    const original = strs[i];
    const copied = copies[i];
    const group = map.get(copied) ?? [];
    group.push(original);
    map.set(copied, group);
  }
  return [...map.values()];
}
