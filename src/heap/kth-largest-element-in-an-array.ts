function findKthLargest(nums: number[], k: number): number {
  const n = nums.length;
  const mid = (n - 1) >> 1;
  const swap = (i: number, j: number) => {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  for (let i = 0; i < k; ++i) {
    for (let j = n - 1; j >= mid; --j) {
      let childIndex = j;
      let parentIndex = (childIndex - 1) >> 1;
      while (parentIndex >= i && nums[childIndex] > nums[parentIndex]) {
        swap(childIndex, parentIndex);
        childIndex = parentIndex;
        parentIndex = (childIndex - 1) >> 1;
      }
    }
  }

  return nums[k - 1];
}

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));
