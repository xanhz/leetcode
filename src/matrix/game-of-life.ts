/**
 * @link https://leetcode.com/problems/game-of-life
 */
function gameOfLife(board: number[][]): void {
  const m = board.length,
    n = board[0].length;

  const isInBoard = (i: number, j: number) => {
    return i >= 0 && i < m && j >= 0 && j < n;
  };

  const countLiveNeighbors = (i: number, j: number) => {
    let cnt = 0;
    const coordinates = [
      [0, 1],
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [-1, -1],
      [-1, 0],
      [-1, 1],
    ];
    for (const [x, y] of coordinates) {
      if (isInBoard(i + x, j + y)) {
        cnt += board[i + x][j + y] == 1 || board[i + x][j + y] == -1 ? 1 : 0;
      }
    }
    return cnt;
  };

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      const neighborCount = countLiveNeighbors(i, j);
      if (board[i][j] == 1) {
        if (neighborCount < 2 || neighborCount > 3) {
          board[i][j] = -1;
        }
      } else {
        if (neighborCount == 3) {
          board[i][j] = 2;
        }
      }
    }
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (board[i][j] == -1) {
        board[i][j] = 0;
      } else if (board[i][j] == 2) {
        board[i][j] = 1;
      }
    }
  }
}
