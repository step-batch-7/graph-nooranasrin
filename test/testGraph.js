const assert = require('assert');
const bfs = require('../src/graph').bfs;

describe('bfs', () => {
  it('should return false when the pair contains single node and it is not connected to itself', () => {
    assert.ok(!bfs([['a', 'b']], 'a', 'a'));
  });

  it('should return true when the pair contains single node and it is connected to itself', () => {
    assert.ok(bfs([['a', 'a']], 'a', 'a'));
  });

  it('should give false when the pairs contains two nodes and they are not connected', () => {
    assert.ok(
      !bfs(
        [
          ['a', 'c'],
          ['b', 'c'],
        ],
        'a',
        'b'
      )
    );
  });

  it('should give true when the pairs contains two nodes and they are perfectly connected', () => {
    assert.ok(
      bfs(
        [
          ['a', 'b'],
          ['b', 'a'],
        ],
        'a',
        'b'
      )
    );
  });
});
