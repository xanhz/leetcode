/**
 * @link https://leetcode.com/problems/longest-consecutive-sequence
 */
function longestConsecutive(nums: number[]): number {
  const unique = new Set(nums);
  let maxLength = 0;
  for (const num of unique) {
    // if num is not the head of sequence then continue
    if (unique.has(num - 1)) {
      continue;
    }
    let length = 0;
    let curr = num;
    while (unique.has(curr++)) {
      ++length;
    }
    if (length > maxLength) {
      maxLength = length;
    }
  }
  return maxLength;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([0, 1, 2, 3, 4, 0, 1, 2, 3, 4]));
