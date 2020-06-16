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

module.exports = findPath;
