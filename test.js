'use strict'

const assert = require('assert')
const neach = require('.')

describe('neach()', function () {
  it('should loop through a single array', function () {
    let t = 0
    neach([1, 2, 3], n => { t += n })
    assert.strictEqual(t, 6)
  })

  it('should run a nested loop through multiple arrays', function () {
    const r = ['ac', 'ad', 'bc', 'bd']
    neach(['a', 'b'], ['c', 'd'], (i, j) => { assert.strictEqual(i + j, r.shift()) })
    assert.strictEqual(r.length, 0)
  })

  it('should support iterables', function () {
    let t = 0
    neach([1, 2, 3][Symbol.iterator](), n => { t += n })
    assert.strictEqual(t, 6)
  })

  it('should do nothing if no iterables are supplied', function () {
    neach(() => { throw new Error() })
  })
})
