/**
 * This problem equals to detect cycle in directed graph
 *
 * @link https://leetcode.com/problems/course-schedule
 */
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = toAdjacencyList(numCourses, prerequisites);
};

function toAdjacencyList(numCourses: number, prerequisites: number[][]) {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  for (let i = 0; i < prerequisites.length; ++i) {
    const [a, b] = prerequisites[i];
    graph[a].push(b);
  }
  return graph;
}
