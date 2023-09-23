/**
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
- Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially.
The remaining elements of nums are not important as well as the size of nums.
- Return k.
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
