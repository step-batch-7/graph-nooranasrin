const fs = require('fs');
const bfs = require('./src/graph').bfs;

const main = function () {
  let pairs = fs.readFileSync('./data.txt', 'utf8').split('\n');
  pairs = pairs.map((relation) => {
    let array = relation.split('|');
    array.shift();
    array.pop();
    return array.map((a) => a.trim());
  });
  const isExists = bfs(pairs, 'bb', 'jj');
  console.log(isExists);
};

main();
