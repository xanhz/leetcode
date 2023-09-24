/**
 * @link https://leetcode.com/problems/permutations
 */
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const backtracking = (permutation: number[]) => {
    if (permutation.length == nums.length) {
      result.push([...permutation]);
      return;
    }
    for (const num of nums) {
      if (!permutation.includes(num)) {
        permutation.push(num);
        backtracking(permutation);
        permutation.pop();
      }
    }
  };
  backtracking([]);
  return result;
}

console.log(permute([1, 2, 3]));
