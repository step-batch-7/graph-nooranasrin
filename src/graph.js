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

const dfs = function (pairs, source, target, visited = new Set()) {
  const graph = pairs.reduce(createGraph, {});
  visited.add(source);
  const children = graph[source] || [];

  for (let i = 0; i < children.length; i++) {
    if (children[i] === target) {
      return true;
    }

    if (!visited.has(children[i])) {
      const result = dfs(pairs, children[i], target, visited);
      if (result) return result;
    }
  }
  return false;
};

module.exports = { bfs, dfs, createGraph };
