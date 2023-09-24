/**
 * @link https://leetcode.com/problems/word-search
 */
function exist(board: string[][], word: string): boolean {
  const m = board.length,
    n = board[0].length;

  const isInBoard = (i: number, j: number) => {
    return i >= 0 && i < m && j >= 0 && j < n;
  };

  const backtracking = (i: number, j: number, index: number): boolean => {
    if (index == word.length) {
      return true;
    }
    if (!isInBoard(i, j)) {
      return false;
    }
    if (board[i][j] != word[index]) {
      return false;
    }
    let temp = board[i][j];
    board[i][j] = '*';
    const result =
      backtracking(i, j - 1, index + 1) ||
      backtracking(i, j + 1, index + 1) ||
      backtracking(i - 1, j, index + 1) ||
      backtracking(i + 1, j, index + 1);
    board[i][j] = temp;
    return result;
  };
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (backtracking(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
}

const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E'],
];
const word = 'ABCCED';

console.log(exist(board, word));
