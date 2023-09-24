/**
 * @link https://leetcode.com/problems/merge-sorted-array
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
