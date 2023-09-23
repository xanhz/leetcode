/**
 * @link https://leetcode.com/problems/rotate-image
 */
function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const nRolls = n >> 1;
  for (let roll = 0; roll < nRolls; ++roll) {
    for (let j = roll; j < n - roll - 1; ++j) {
      const a = matrix[roll][j]
      const b = matrix[j][n - roll - 1];
      const c = matrix[n - roll - 1][n - j - 1];
      const d = matrix[n - j - 1][roll];
      matrix[j][n - roll - 1] = a;
      matrix[n - roll - 1][n - j - 1] = b;
      matrix[n - j - 1][roll] = c;
      matrix[roll][j] = d;
    }
  }
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotate(matrix);
console.log(matrix);

matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
rotate(matrix);
console.log(matrix);
