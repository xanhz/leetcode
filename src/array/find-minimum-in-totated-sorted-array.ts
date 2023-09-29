/**
 * @link https://leetcode.com/problems/find-minimum-in-rotated-sorted-array
 */
function findMin(nums: number[]): number {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    // [mid, right) is not sorted
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
}

console.log(findMin([3, 1, 2]));
