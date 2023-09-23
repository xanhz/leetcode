/**
Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const copiedNums1 = [...nums1];
  let i = 0,
    j = 0,
    k = 0;
  while (i < m && j < n) {
    if (copiedNums1[i] <= nums2[j]) {
      nums1[k++] = copiedNums1[i];
      ++i;
    } else {
      nums1[k++] = nums2[j];
      ++j;
    }
  }
  while (i < m) {
    nums1[k++] = copiedNums1[i];
    ++i;
  }
  while (j < n) {
    nums1[k++] = nums2[j];
    ++j;
  }
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
