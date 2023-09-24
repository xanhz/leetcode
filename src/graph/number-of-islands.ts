/**
 * @link https://leetcode.com/problems/number-of-islands
 */
function numIslands(grid: string[][]): number {
  const m = grid.length, n = grid[0].length;
  let nIslands = 0;

  const dfs = (i: number, j: number) => {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == '0' || grid[i][j] == '2') {
      return;
    }
    grid[i][j] = '2';
    dfs(i - 1, j);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i, j + 1);
  }

  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] == '1') {
        dfs(i, j);
        ++nIslands;
      }
    }
  }

  return nIslands;
}
