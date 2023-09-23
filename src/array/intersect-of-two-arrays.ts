function intersect(nums1: number[], nums2: number[]): number[] {
  const counter1 = new Map<number, number>();
  let length1 = nums1.length, length2 = nums2.length;
  const result: number[] = [];
  for (let i = 0; i < length1; ++i) {
    const count = counter1.get(nums1[i]) ?? 0;
    counter1.set(nums1[i], count + 1);
  }
  for (let i = 0; i < length2; ++i) {
    const count = counter1.get(nums2[i]);
    if (count == null || count == 0) {
      continue;
    }
    result.push(nums2[i]);
    counter1.set(nums2[i], count - 1);
  }
  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
