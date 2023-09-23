/**
 * @link https://leetcode.com/problems/spiral-matrix
 */
function spiralOrder(matrix: number[][]): number[] {
  const m = matrix.length,
    n = matrix[0].length,
    total = m * n;
  const nums: number[] = [];
  const nRolls = Math.ceil(Math.min(m, n) / 2);
  let count = 0;
  for (let roll = 0; roll < nRolls; ++roll) {
    for (let j = roll; j < n - roll - 1; ++j) {
      ++count;
      if (count <= total) {
        nums.push(matrix[roll][j]);
      } else {
        return nums;
      }
    }
    for (let i = roll; i < m - roll - 1; ++i) {
      ++count;
      if (count <= total) {
        nums.push(matrix[i][n - roll - 1]);
      } else {
        return nums;
      }
    }
    for (let j = n - roll - 1; j > roll; --j) {
      ++count;
      if (count <= total) {
        nums.push(matrix[m - roll - 1][j]);
      } else {
        return nums;
      }
    }
    for (let i = m - roll - 1; i > roll; --i) {
      ++count;
      if (count <= total) {
        nums.push(matrix[i][roll]);
      } else {
        return nums;
      }
    }
  }
  if (count < total) {
    nums.push(matrix[m >> 1][n >> 1]);
  }
  return nums;
}

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);

console.log(spiralOrder([[6, 9, 7]]));
