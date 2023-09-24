/**
 * @link https://leetcode.com/problems/majority-element
 */
function majorityElement(nums: number[]): number {
  let n = nums.length,
    i = 0,
    count = 0,
    result = 0;

  while (i < n) {
    if (count === 0) {
      result = nums[i];
    }
    count += nums[i] === result ? 1 : -1;
    ++i;
  }

  return result;
}
// Tips: If a value is a majority element, the count variable will never be 0
console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2;
