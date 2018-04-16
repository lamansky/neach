'use strict'

const vfn = require('vfn')

module.exports = vfn(0, (iterables, cb) => { layer([], iterables, cb) })

function layer (before, after, cb) {
  if (after.length) {
    after = after.slice()
    for (const next of after.shift()) {
      layer(before.concat([next]), after, cb)
    }
  } else if (before.length) {
    cb(...before)
  }
}
