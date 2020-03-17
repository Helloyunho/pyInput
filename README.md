# pyinput

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

Python-like input module for Node.js

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm install pyinput # Use yarn if you prefer to use yarn
```

## Usage

Example:

```js
// This is in example folder
const pyInput = require('../src');

const run = async () => {
  let done = false;
  while (!done) {
    const num = await pyInput('Type a number: ');

    const numParsed = parseInt(num);

    if (isNaN(numParsed)) {
      console.log('This is not a number! Try again.');
    } else {
      console.log(`Here is the number that powered: ${numParsed ** 2}`);
      done = true;
    }
  }
};

run();
```

## API

### `pyInput(...messages)` -> `{Promise.<string>}`

Python-like input

#### Parameters:

| Name     | Type  | Attributes     | Description                   |
| -------- | ----- | -------------- | ----------------------------- |
| messages | `any` | `<repeatable>` | Messages that will prints out |

#### Returns:

Recevied input

Type: `Promise.<string>`

## Maintainers

[@Helloyunho](https://github.com/Helloyunho)

## Contributing

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2020 Helloyunho
