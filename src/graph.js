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

const enqueueChildren = function (graph, queue, visitedNodes, node) {
  const children = graph[node];
  if (children) {
    children.forEach((child) => {
      if (!(queue.includes(child) || visitedNodes.includes(child))) {
        queue.push(child);
      }
    });
  }
  return queue;
};

const bfs = function (pairs, source, target) {
  const graph = pairs.reduce(createGraph, {});
  let queue = [source];
  const visitedNodes = [];
  while (queue.length > 0) {
    const node = queue.shift();
    visitedNodes.push(node);
    if (node === target && graph[node].length > 0) {
      return true;
    }
    queue = enqueueChildren(graph, queue, visitedNodes, node);
  }
  return false;
};

module.exports = { bfs };
