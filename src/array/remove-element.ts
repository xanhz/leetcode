/**
 * @link https://leetcode.com/problems/remove-element
 */
function removeElement(nums: number[], val: number): number {
  let i = 0,
    length = nums.length,
    results = [];
  while (i < length) {
    if (nums[i] !== val) {
      results.push(nums[i]);
    }
    ++i;
  }
  let k = results.length;
  i = 0;
  while (i < k) {
    nums[i] = results[i];
    ++i;
  }
  return k;
}

let nums = [3, 2, 2, 3];
removeElement(nums, 3);
console.log(nums);

nums = [0, 1, 2, 2, 3, 0, 4, 2];
removeElement(nums, 2);
console.log(nums);
