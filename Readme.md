# pkill

### Convenience wrapper around `pkill(1)`.

[![Build Status](https://travis-ci.org/timoxley/pkill.png?branch=master)](https://travis-ci.org/timoxley/pkill)

## Usage

#### Sync

* Will throw if there's a problem.
* Does not throw for no matching processes.

```js
// kills all processes named 'node'
pkill('node')
```

#### Match on full exec pattern: `pkill.full`

```js
// kills all processes matching 'node debug'
pkill.full('node debug')
```

#### Async

* Does not err for no matching processes.

```js
pkill('node', function (err, validPid) {
  err      // if err.
  validPid // if matched any processes
})
```

## Compatibility

* Not work on windows.

## License

MIT
