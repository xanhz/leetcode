import { randomArray } from '../utils/array';

function merge(nums: number[], start: number, mid: number, end: number) {
  const merged: number[] = [];
  let i = start;
  let j = mid;
  while (i < mid && j < end) {
    if (nums[i] < nums[j]) {
      merged.push(nums[i]);
      ++i;
    } else {
      merged.push(nums[j]);
      ++j;
    }
  }
  while (i < mid) {
    merged.push(nums[i]);
    ++i;
  }
  while (j < end) {
    merged.push(nums[j]);
    ++j;
  }
  let k = start;
  for (let m = 0; m < merged.length; ++m, ++k) {
    nums[k] = merged[m];
  }
}

function mergeSort(nums: number[], start: number, end: number) {
  if (start + 1 == end) return;
  const mid = Math.floor((end - start) / 2) + start;
  mergeSort(nums, start, mid);
  mergeSort(nums, mid, end);
  merge(nums, start, mid, end);
}

function sortArray(nums: number[]): number[] {
  mergeSort(nums, 0, nums.length);
  return nums;
}

const originalArray = randomArray(1_000_000, 1, 1_000_000);

function testMergeSort(arr: number[]) {
  const start = Date.now();
  sortArray(arr);
  const end = Date.now();
  console.log('[MERGE_SORT]: %d ms', end - start);
}

function testBuiltInSort(arr: number[]) {
  const start = Date.now();
  arr.sort();
  const end = Date.now();
  console.log('[BUILT_IN_SORT]: %d ms', end - start);
}

testMergeSort([...originalArray]);
testBuiltInSort([...originalArray]);
