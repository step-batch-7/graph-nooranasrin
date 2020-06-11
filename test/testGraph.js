const assert = require('assert');
const bfs = require('../src/graph').bfs;

describe('bfs', () => {
  it('should return false when the pair contains single node and it is not connected to itself', () => {
    assert.ok(!bfs([['a']], 'a', 'a'));
  });
});
