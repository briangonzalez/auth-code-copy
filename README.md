# auth-code-copy

[![Build Status](https://img.shields.io/travis/briangonzalez/auth-code-copy/master.svg?style=flat-square)](https://travis-ci.org/briangonzalez/auth-code-copy) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)


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
import { listen } from 'auth-code-copy'
const notify = (err, msg) => { growl(`Copied ${msg.code}!`) }
listen(notify)
```

## Demo

![demo of auth-code-copy](https://user-images.githubusercontent.com/659829/32456177-84690c9e-c2d9-11e7-8a46-97c4a6d9ed75.gif)

## Tests

```sh
$ npm t
```

## License

MIT © [Brian Gonzalez](https://briangonzalez.org)
