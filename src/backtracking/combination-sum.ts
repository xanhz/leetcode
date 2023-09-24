/**
 * @link https://leetcode.com/problems/combination-sum
 */
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const backtracking = (sum: number, index: number, nums: number[]) => {
    if (sum == target) {
      result.push([...nums]);
      return;
    }
    for (let j = index; j < candidates.length; ++j) {
      if (sum + candidates[j] <= target) {
        nums.push(candidates[j]);
        backtracking(sum + candidates[j], j, nums);
        nums.pop();
      }
    }
  };
  backtracking(0, 0, []);
  return result;
}

console.log(combinationSum([2, 3, 6, 7], 7));
