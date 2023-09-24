/**
 * @link https://leetcode.com/problems/n-queens-ii
 */
function totalNQueens(n: number): number {
  const puzzle = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
  const forbidden = Array.from({ length: n }, () => false);
  let count = 0;

  const isInPuzzle = (i: number, j: number) => {
    return i >= 0 && i < n && j >= 0 && j < n;
  };

  const isValid = (i: number, j: number): boolean => {
    for (let x = i - 1, y = 1; x >= 0; --x, ++y) {
      if (isInPuzzle(x, j - y) && puzzle[x][j - y]) {
        return false;
      }
      if (isInPuzzle(x, j + y) && puzzle[x][j + y]) {
        return false;
      }
    }
    return true;
  };

  const backtracking = (row: number) => {
    if (row == n) {
      ++count;
      return;
    }
    for (let j = 0; j < n; ++j) {
      if (!forbidden[j] && isValid(row, j)) {
        forbidden[j] = true;
        puzzle[row][j] = true;
        backtracking(row + 1);
        puzzle[row][j] = false;
        forbidden[j] = false;
      }
    }
  };
  
  backtracking(0);
  return count;
}

console.log(totalNQueens(4));
