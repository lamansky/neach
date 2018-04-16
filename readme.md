# neach

It’s like `.forEach()`, but nested.

## Installation

Requires [Node.js](https://nodejs.org/) 6.0.0 or above.

```bash
npm i neach
```

## API

The module exports a single function.

### Parameters

1. Variadic: `...iterables` (one or more of: iterable): The levels of the nested each-loop.
2. `cb` (function): A callback which is given one argument for each iterable.

### Return Value

None.

## Example

### Before

```javascript
for (const message of ['Hello', 'Goodbye']) {
  for (const whom of ['world', 'Dolly']) {
    for (const punc of ['.', '!']) {
      console.log(message + ', ' + whom + punc)
    }
  }
}
```

### After

```javascript
const neach = require('neach')

neach(['Hello', 'Goodbye'], ['world', 'Dolly'], ['.', '!'], (message, whom, punc) => {
  console.log(message + ', ' + whom + punc)
})
```
