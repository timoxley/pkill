'use strict'

var test = require('tape')
var spawn = require('child_process').spawn
var pkill = require('./')

test('pkill in background', function (t) {
  spawn('sleep', [2])
  .on('exit', function (code) {
    t.ok(code !== 0) // was killed
    t.end()
  })
  pkill('sleep')
})

test('pkill with callback', function (t) {
  t.plan(3)
  spawn('sleep', [2])
  .on('exit', function (code) {
    t.ok(code !== 0) // was killed
  })
  pkill('sleep', function (err, killed) {
    t.ifError(err)
    t.ok(killed)
  })
})

test('pkill empty string failure callback err', function (t) {
  pkill('', function (err) {
    t.ok(err)
    t.end()
  })
})

test('pkill empty string failure with no callback throws', function (t) {
  t.throws(() => {
    pkill('')
  })
  t.end()
})

test('pkill empty string failure with no callback throws', function (t) {
  t.throws(() => {
    pkill(undefined)
  })
  t.end()
})

test('pkill undefined arg failure callback err', function (t) {
  pkill(undefined, function (err) {
    t.ok(err)
    t.end()
  })
})

test('pkill no arg failure throw err', function (t) {
  t.throws(() => {
    pkill(() => {
      t.fail('should not get here')
    })
  })
  t.end()
})

test('pkill background failure is quiet', function (t) {
  pkill('jvghchfgcghfasdasd')
  setTimeout(function () {
    t.end()
  })
})

test('pkill callback failure quiet', function (t) {
  pkill('jvghchfgcghfasdasd', function (err, killed) {
    t.ifError(err)
    t.ok(!killed)
    t.end()
  })
})

test('pkill.full background', function (t) {
  var num = Math.random() + 2
  spawn('sleep', [num])
  .on('exit', function (code) {
    t.ok(code !== 0) // was killed
    t.end()
  })
  pkill.full('sleep ' + num)
})

test('pkill.full callback', function (t) {
  t.plan(3)
  var num = Math.random() + 2
  spawn('sleep', [num])
  .on('exit', function (code) {
    t.ok(code !== 0) // was killed
  })

  pkill.full('sleep ' + num, function (err, killed) {
    t.ifError(err)
    t.ok(killed)
  })
})
