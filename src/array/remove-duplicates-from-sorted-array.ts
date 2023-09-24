/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array
 */
function removeDuplicates(nums: number[]): number {
  let i = 0,
    k = 0,
    length = nums.length,
    uniqueNums = new Set<number>();

  while (i < length) {
    if (!uniqueNums.has(nums[i])) {
      nums[k++] = nums[i];
      uniqueNums.add(nums[i]);
    }
    ++i;
  }

  return k;
}

let nums: number[] = [1, 1, 2];
removeDuplicates(nums);
console.log(nums); // [1, 2, _]

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(nums);
console.log(nums); // [0, 1, 2, 3, 4, _, _, _, _, _]
