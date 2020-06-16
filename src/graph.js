const createGraph = require('./createGraph');

const isVisitedOrInQueue = (queue, child, visited) =>
  !(queue.includes(child) || visited.has(child));

const bfs = function (pairs, source, target) {
  const graph = pairs.reduce(createGraph, {});
  let queue = [source];
  const visited = new Set();
  while (queue.length > 0) {
    const node = queue.shift();
    const children = graph[node] || [];

    for (let i = 0; i < children.length; i++) {
      if (children[i] === target) {
        return true;
      }
      if (isVisitedOrInQueue(queue, children[i], visited)) {
        visited.add(node);
        queue.push(children[i]);
      }
    }
  }
  return false;
};

const dfs = function (graph, source, target, visited = new Set()) {
  visited.add(source);
  const children = graph[source] || [];

  for (let i = 0; i < children.length; i++) {
    if (children[i] === target) {
      return true;
    }

    if (!visited.has(children[i])) {
      const result = dfs(graph, children[i], target, visited);
      if (result) return result;
    }
  }
  return false;
};

const findPath = function (graph, source, target, visited = new Set()) {
  visited.add(source);
  const children = graph[source] || [];
  const parent = [source];

  for (let i = 0; i < children.length; i++) {
    if (children[i] === target) {
      return parent.concat(children[i]);
    }

    if (!visited.has(children[i])) {
      const path = parent.concat(findPath(graph, children[i], target, visited));
      if (path.includes(target)) {
        return path;
      }
    }
  }
  return [];
};

module.exports = { bfs, dfs, findPath };
