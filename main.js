const fs = require('fs');
const { bfs, dfs } = require('./src/graph');

const main = function () {
  let pairs = fs.readFileSync('./data.txt', 'utf8').split('\n');
  pairs = pairs.map((relation) => {
    let array = relation.split('|');
    array.shift();
    array.pop();
    return array.map((a) => a.trim());
  });
  // let pairs = [
  //   ['a', 'b'],
  //   ['b', 'c'],
  // ];
  const isExists = dfs(pairs, 'bb', 'jj');
  console.log(isExists);
};

main();
