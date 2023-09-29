/**
 * @link https://leetcode.com/problems/search-a-2d-matrix
 */
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length,
    n = matrix[0].length;
  let left = 0,
    right = m * n;
  while (left < right) {
    let mid = (left + right) >> 1;
    let row = Math.floor(mid / n);
    let col = mid % n;
    if (matrix[row][col] == target) {
      return true;
    } else if (matrix[row][col] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return false;
}

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    3
  )
);
