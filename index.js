'use strict'

var execFile = require('child_process').execFile
var assert = require('assert')

/**
 *  The pgrep and pkill utilities return one of the following values upon exit:
 *     0       One or more processes were matched.
 *     1       No processes were matched.
 *     2       Invalid options were specified on the command line.
 *     3       An internal error occurred.
 */

var MATCHED_PROCESSES = 0
var NO_MATCHED_PROCESSES = 1
var INVALID_OPTIONS = 2
var INTERNAL_ERROR = 3

module.exports = function pkill (name, opts, fn) {
  if (arguments.length === 2) {
    if (typeof opts === 'function') {
      fn = opts
      opts = undefined
    }
  }

  opts = opts || {}
  fn = fn || maybeThrow

  assert(typeof fn === 'function', 'callback must be a function')
  if (typeof name !== 'string') return fn(new Error('first argument must be string'))
  if (!name.length) return fn(new Error('name must not be empty'))

  execFile('pkill', [name], function (err, stdout) {
    if (err && err.code !== NO_MATCHED_PROCESSES) {
      err.message = getMessage(err)
      return fn(err)
    }

    fn(null, !err)
  })
}

module.exports.full = function pkillfull (pattern, opts, fn) {
  assert(typeof pattern === 'string', 'first argument must be string')
  if (arguments.length === 2) {
    if (typeof opts === 'function') {
      fn = opts
      opts = undefined
    }
  }

  opts = opts || {}
  fn = fn || maybeThrow

  assert(typeof fn === 'function', 'callback must be a function')

  execFile('pkill', ['-f', pattern], function (err, stdout) {
    if (err && err.code !== NO_MATCHED_PROCESSES) {
      err.message = getMessage(err)
      return fn(err)
    }

    fn(null, !err)
  })
}

function getMessage (err) {
  if (!err) return ''
  var message = err.message.trim()
  var content = message.replace(/^Command failed:/, '').trim()
  return content
}

function maybeThrow (err) {
  if (err) throw err
}

module.exports.status = {
  MATCHED_PROCESSES: MATCHED_PROCESSES,
  NO_MATCHED_PROCESSES: NO_MATCHED_PROCESSES,
  INVALID_OPTIONS: INVALID_OPTIONS,
  INTERNAL_ERROR: INTERNAL_ERROR,
  0: 'MATCHED_PROCESSES',
  1: 'NO_MATCHED_PROCESSES',
  2: 'INVALID_OPTIONS',
  3: 'INTERNAL_ERROR'
}
