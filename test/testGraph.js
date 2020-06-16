const assert = require('assert');
const { bfs, dfs } = require('../src/graph');

describe('bfs', () => {
  it('should return false when the pair contains single node and it is not connected to itself', () => {
    assert.ok(!bfs([['a', 'b']], 'a', 'a'));
  });

  it('should return true when the pair contains single node and it is connected to itself', () => {
    assert.ok(bfs([['a', 'a']], 'a', 'a'));
  });

  it('should give false when the pairs contains two nodes and they are not connected', () => {
    const pairs = [
      ['a', 'c'],
      ['b', 'd'],
    ];
    assert.ok(!bfs(pairs, 'a', 'b'));
  });

  it('should give true when the pairs contains two nodes and they are perfectly connected', () => {
    let pairs = [
      ['a', 'b'],
      ['b', 'a'],
    ];
    assert.ok(bfs(pairs, 'a', 'b'));
  });

  it('should give false when the pairs contains three nodes and they are sparsely connected', () => {
    const pairs = [
      ['a', 'b'],
      ['c', 'd'],
      ['e', 'f'],
    ];
    assert.ok(!bfs(pairs, 'a', 'c'));
  });

  it("should give false when the pair doesn't contain anything", () => {
    assert.ok(!bfs([], 'a', 'b'));
  });
});

describe('dfs', () => {
  it('should return false when the pair contains single node and it is not connected to itself', () => {
    assert.ok(!dfs({ a: ['b'] }, 'a', 'a'));
  });

  it('should return true when the pair contains single node and it is connected to itself', () => {
    assert.ok(dfs({ a: ['a'] }, 'a', 'a'));
  });

  it('should give false when the pairs contains two nodes and they are not connected', () => {
    const pairs = { a: ['c'], b: ['d'] };
    assert.ok(!dfs(pairs, 'a', 'b'));
  });

  it('should give true when the pairs contains two nodes and they are perfectly connected', () => {
    let pairs = { a: ['b'], b: ['a'] };
    assert.ok(dfs(pairs, 'a', 'b'));

    pairs = { 10: [5, 15], 5: [1, 8], 15: [18, 12] };
    assert.ok(dfs(pairs, 10, 12));
  });

  it('should give false when the pairs contains three nodes and they are sparsely connected', () => {
    const pairs = { a: ['b'], c: ['d'], e: ['f'] };
    assert.ok(!dfs(pairs, 'a', 'c'));
  });

  it("should give false when the pair doesn't contain anything", () => {
    assert.ok(!dfs({}, 'a', 'b'));
  });
});
