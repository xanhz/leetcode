/**
 * @link https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array
 */
function searchRange(nums: number[], target: number): number[] {
  const i = lowerBound(nums, target);
  if (nums[i] != target) return [-1, -1];
  const j = upperBound(nums, target);
  return [i, j - 1];
}

/**
 * Find first element index is not less than `target`
 */
function lowerBound(nums: number[], target: number): number {
  let left = 0,
    right = nums.length;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left] >= target ? left : -1;
}

/**
 * Find first element index is greater than `target`
 */
function upperBound(nums: number[], target: number): number {
  let left = 0,
    right = nums.length;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right < nums.length && nums[right] > target ? right : nums.length;
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
