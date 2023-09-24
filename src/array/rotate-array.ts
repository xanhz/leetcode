/**
 * @link https://leetcode.com/problems/rotate-array
 */
function rotate(nums: number[], k: number): void {
  const clone = [...nums];
  let i = 0,
    n = nums.length;
  while (i < n) {
    nums[(i + k) % n] = clone[i];
    ++i;
  }
}

/**
O(n) time, O(1) space

function rotate(nums: number[], k: number): void {
  k %= nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    ++start;
    --end;
  }
}
 */
