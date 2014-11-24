# pkill

## Examples
```js
pkill('node') // kills all node processes
// will throw if there's a problem.
// does not throw for no matching processes.

// alternatively, get some feedback
pkill('node', function(err, validPid) {
  err // if err.
  validPid // if 'node' matched any processes.
  // does not err for no matching processes.
})
```

To match more than just the process name, use `pkill.full`:

```js
pkill.full('node debug') // kills all processes matching 'node debug'
pkill('node', function(err, validPid) {
  err // if err
  validPid // if 'node' matched any processes
  // does not err for no matching processes.
})
```

## Compatibility

Convenience wrapper around `pkill(1)`. Will not work on windows.

## License

MIT
