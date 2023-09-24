/**
 * @link https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii
 */
function removeDuplicates(nums: number[]): number {
  let i = 0,
    k = 0,
    length = nums.length;

  while (i < length) {
    let value = nums[i],
      count = 0;
    while (i < length && nums[i] === value) {
      ++count;
      if (count <= 2) {
        nums[k] = value;
        ++k;
      }
      ++i;
    }
  }

  return k;
}

let nums: number[] = [1, 1, 1, 2, 2, 3];
removeDuplicates(nums);
console.log(nums); // [1, 2, 2, 2, 3, _]

nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
removeDuplicates(nums);
console.log(nums); // [0, 0, 1, 1, 2, 3, 3, _, _]
