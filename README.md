# auth-code-copy

[![Build Status](https://travis-ci.org/briangonzalez/auth-code-copy.svg?branch=master)](https://travis-ci.org/briangonzalez/auth-code-copy) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)


> Copy auth codes sent via iMessage to your clipboard.

## Installation

```
$ npm install --global auth-code-copy
```

## Usage

### Command line

```sh
$ auth-code-copy-listen

# => Listening for auth codes...
```

### Programmatically

```js
const { listen } = require('auth-code-copy')
listen()
```

## Demo

![demo of alfred messages](https://user-images.githubusercontent.com/659829/27117260-a7bcc706-508a-11e7-80f9-d3db4360d19c.gif)

## Tests

```sh
$ npm t
```

## License

MIT © [Brian Gonzalez](https://briangonzalez.org)
