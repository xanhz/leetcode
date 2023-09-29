/**
 * @link https://leetcode.com/problems/set-matrix-zeroes
 */
function setZeroes(matrix: number[][]): void {
  const m = matrix.length,
    n = matrix[0].length;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (matrix[i][j] == 0) {
        for (let c = 0; c < n; ++c) {
          if (matrix[i][c] != 0) {
            matrix[i][c] = Infinity;
          }
        }
        for (let r = 0; r < m; ++r) {
          if (matrix[r][j] != 0) {
            matrix[r][j] = Infinity;
          }
        }
      }
    }
  }
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (matrix[i][j] == Infinity) {
        matrix[i][j] = 0;
      }
    }
  }
}
