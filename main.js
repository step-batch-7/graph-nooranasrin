const fs = require('fs');
const { bfs, dfs, findPath } = require('./src/graph');
const createGraph = require('./src/createGraph');

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
