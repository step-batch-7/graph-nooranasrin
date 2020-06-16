const createGraph = function (graph, pair) {
  if (pair[0] in graph) {
    graph[pair[0]].push(pair[1]);
    return graph;
  }
  graph[pair[0]] = (pair[1] && [pair[1]]) || [];
  return graph;
};

module.exports = createGraph;
