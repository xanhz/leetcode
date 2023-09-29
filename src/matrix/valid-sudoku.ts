/**
 * @link https://leetcode.com/problems/valid-sudoku
 */
function isValidSudoku(board: string[][]): boolean {
  const isValidCross = (row: number, col: number): boolean => {
    const val = board[row][col];
    for (let j = 0; j < 9; ++j) {
      if (j == col) continue;
      if (val == board[row][j]) return false;
    }
    for (let i = 0; i < 9; ++i) {
      if (i == row) continue;
      if (val == board[i][col]) return false;
    }
    return true;
  };

  const isValidCell = (row: number, col: number): boolean => {
    const val = board[row][col];
    const [x, y] = [Math.floor(row / 3), Math.floor(col / 3)];
    for (let i = 3 * x; i < 3 * (x + 1); ++i) {
      for (let j = 3 * y; j < 3 * (y + 1); ++j) {
        if (i == row && j == col) continue;
        if (val == board[i][j]) return false;
      }
    }
    return true;
  };

  for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
      if (board[i][j] != '.' && (!isValidCross(i, j) || !isValidCell(i, j))) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ])
);
