/**
 * @link https://leetcode.com/problems/combinations
 */
function combine(n: number, k: number): number[][] {
  const result: number[][] = [];
  const backtracking = (i: number, combination: number[]) => {
    if (combination.length == k) {
      result.push([...combination]);
      return;
    }
    for (let j = i + 1; j <= n; ++j) {
      combination.push(j);
      backtracking(j, combination);
      combination.pop();
    }
  };
  backtracking(0, []);
  return result;
}

console.log(combine(4, 2));
