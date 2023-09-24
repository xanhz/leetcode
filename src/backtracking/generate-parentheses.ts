/**
 * @link https://leetcode.com/problems/generate-parentheses
 */
function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  let openCount = 0,
    closeCount = 0;
  const backtracking = (s: string) => {
    if (s.length == 2 * n) {
      result.push(s);
      return;
    }
    if (openCount < n) {
      ++openCount;
      backtracking(s + '(');
      --openCount;
    }
    if (closeCount != openCount) {
      ++closeCount;
      backtracking(s + ')');
      --closeCount;
    }
  };
  backtracking('');
  return result;
}

console.log(generateParenthesis(3));
