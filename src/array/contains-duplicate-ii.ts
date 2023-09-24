/**
 * @link https://leetcode.com/problems/contains-duplicate-ii
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const n = nums.length;
  const hash = new Map<number, number>();
  for (let i = 0; i < n; ++i) {
    const j = hash.get(nums[i]);
    if (j != null && Math.abs(i - j) <= k) {
      return true;
    }
    hash.set(nums[i], i);
  }
  return false;
}

console.log(containsNearbyDuplicate([2, 2], 3));
