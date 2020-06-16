const fs = require('fs');
const { bfs, dfs, createGraph } = require('./src/graph');
const findPath = require('./src/path');

const main = function () {
  let pairs = fs.readFileSync('./data.txt', 'utf8').split('\n');
  pairs = pairs.map((relation) => {
    let array = relation.split('|');
    array.shift();
    array.pop();
    return array.map((a) => a.trim());
  });
  const graph = pairs.reduce(createGraph, {});
  console.log(findPath(graph, 'bb', 'hh'));
};

main();
