/**
 * @link https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
 */
function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length - 1; ++i) {
    let j = binarySearch(numbers, target - numbers[i], i + 1);
    if (j != -1) {
      return [i + 1, j + 1];
    }
  }
  return [-1, -1];
}

function binarySearch(numbers: number[], target: number, fromIndex = 0): number {
  let left = fromIndex,
    right = numbers.length - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (numbers[mid] == target) {
      return mid;
    } else if (numbers[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
