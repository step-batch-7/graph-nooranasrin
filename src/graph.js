//Example
// Pairs => [[from,to],[to,from]]
// Source => from
// To => to
// Should return true.

const createGraph = function (graph, pair) {
  if (pair[0] in graph) {
    graph[pair[0]].push(pair[1]);
    return graph;
  }
  graph[pair[0]] = (pair[1] && [pair[1]]) || [];
  return graph;
};

const bfs = function (pairs, source, target) {
  const graph = pairs.reduce(createGraph, {});
};

const main = function () {
  const pairs = [
    ['a', 'b'],
    ['b', 'a'],
    ['b', 'c'],
  ];
  const isExists = bfs(pairs, 'a', 'c');
};

main();

module.exports = { bfs };
