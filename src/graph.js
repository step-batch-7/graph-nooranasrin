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
