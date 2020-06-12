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

const enqueueChildren = function (children, queue, visitedNodes) {
  if (children) {
    children.forEach((child) => {
      if (!(queue.includes(child) || visitedNodes.has(child))) {
        queue.push(child);
      }
    });
  }
  return queue;
};

const isEqual = function (node, target, isFirstIteration, children) {
  return (
    (node === target && !isFirstIteration) ||
    (children && children.includes(target))
  );
};

const bfs = function (pairs, source, target) {
  const graph = pairs.reduce(createGraph, {});
  let queue = [source];
  const visitedNodes = new Set();
  let isFirstIteration = true;
  while (queue.length > 0) {
    const node = queue.shift();
    if (isEqual(node, target, isFirstIteration, graph[node])) {
      return true;
    }
    visitedNodes.add(node);
    queue = enqueueChildren(graph[node], queue, visitedNodes);
    isFirstIteration = false;
  }
  return false;
};

const dfs = function (pairs, source, target, visitedNodes = new Set()) {
  const graph = pairs.reduce(createGraph, {});
  visitedNodes.add(source);
  console.log(visitedNodes);
  if (source === target) return true;
  const children = graph[source] || [];

  return children.some((child) => {
    if (!visitedNodes.has(child)) {
      return dfs(pairs, child, target, visitedNodes);
    }
  });
};

module.exports = { bfs, dfs };
