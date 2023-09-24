/**
 * This problem equals to find the path length
 * 
 * @link https://leetcode.com/problems/evaluate-division
 */
function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  const graph = toAdjacencyList(equations, values);
  const divisions: number[] = Array(queries.length);

  const dfs = (
    current: string,
    target: string,
    visited: Set<string>,
    product = 1
  ): { ok: boolean; division: number } => {
    if (current == target) {
      return { division: product, ok: true };
    }
    visited.add(current);
    const list = graph.get(current) as { v: string; weight: number }[];
    for (const { v, weight } of list) {
      if (!visited.has(v)) {
        const result = dfs(v, target, visited, product * weight);
        if (result.ok) {
          return result;
        }
        visited.delete(v);
      }
    }
    return { ok: false, division: -1 };
  };

  for (let i = 0; i < queries.length; ++i) {
    const [from, to] = queries[i];
    if (!graph.has(from) || !graph.has(to)) {
      divisions[i] = -1;
    } else {
      const { division } = dfs(from, to, new Set());
      divisions[i] = division;
    }
  }
  return divisions;
}

function toAdjacencyList(equations: string[][], values: number[]) {
  const graph = new Map<string, { v: string; weight: number }[]>();
  for (let i = 0; i < equations.length; ++i) {
    const weight = values[i];
    const [u, v] = equations[i];

    const adjU = graph.get(u) ?? [];
    adjU.push({ v, weight });
    graph.set(u, adjU);

    const adjV = graph.get(v) ?? [];
    adjV.push({ v: u, weight: 1 / weight });
    graph.set(v, adjV);
  }
  return graph;
}

console.log(
  calcEquation(
    [
      ['a', 'b'],
      ['b', 'c'],
    ],
    [2.0, 3.0],
    [
      ['a', 'c'],
      ['b', 'a'],
      ['a', 'e'],
      ['a', 'a'],
      ['x', 'x'],
    ]
  )
);
