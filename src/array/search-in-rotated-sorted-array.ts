/**
 * @link https://leetcode.com/problems/search-in-rotated-sorted-array
 */
function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] == target) {
      return mid;
    }
    // if [left, mid) is sorted
    else if (nums[left] <= nums[mid]) {
      // normal binary search
      if (nums[left] <= target && target < nums[mid]) {
        right = mid;
      }
      // rotated
      else {
        left = mid + 1;
      }
    }
    // if [mid, right) is sorted
    else {
      // normal binary search
      if (nums[mid] < target && target <= nums[right - 1]) {
        left = mid + 1;
      }
      // rotated
      else {
        right = mid;
      }
    }
  }
  return -1;
}

const nums = [4, 5, 6, 7, 0, 1, 2];
console.log(search(nums, 4));
console.log(search(nums, 5));
console.log(search(nums, 6));
console.log(search(nums, 7));
console.log(search(nums, 0));
console.log(search(nums, 1));
console.log(search(nums, 2));
