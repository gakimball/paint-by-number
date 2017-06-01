<h1 align="center">
  <img src="https://raw.githubusercontent.com/gakimball/paint-by-number/master/assets/logo.png" alt="Paint by Number">
</h1>

> Color ASCII art with ease

[![Travis](https://img.shields.io/travis/gakimball/MODULE.svg?maxAge=2592000)](https://travis-ci.org/gakimball/paint-by-number) [![npm](https://img.shields.io/npm/v/paint-by-number.svg?maxAge=2592000)](https://www.npmjs.com/package/paint-by-number)

## Installation

```bash
npm install paint-by-number
```

## Usage

Let's say you have a string like this:

```
Rainbow!
```

Now you create a template with a string of the same character length like this:

```
 0123456
```

Now you create a palette that maps [ANSI colors](http://en.wikipedia.org/wiki/ANSI_escape_code#Colors) to the numbers.

```js
const palette = {
  0: 'red',
  1: 'yellow',
  2: 'green',
  3: 'cyan',
  4: 'blue',
  5: 'magenta',
  6: 'white'
}
```

Let's put it all together.

```js
const paint = require('paint-by-number');

const input  = 'Rainbow!';
const template = ' 0123456';
const palette = {
  0: 'red',
  1: 'yellow',
  2: 'green',
  3: 'cyan',
  4: 'blue',
  5: 'magenta',
  6: 'white'
};

const output = paint(input, template, palette);
console.log(output);
```

## API

### paint(input, template, palette)

Colors the characters of a string (or an array of strings) based on a color map and palette. Returns the same string or array, but colored.

- **input** (String or Array): string(s) to be painted.
- **template** (String or Array): template to refer to when painting the input string. The structure of `template` should match that of `input`.
  - Every non-whitespace character in the color map is read and checked against the color palette. If a matching property is found in the color palette, the character in the input string is painted with the value of the property. Use whitespace to indicate that a character should not be colored, which means it will use the user's command line default.
- **palette** (Object): Color palette to use when reading the template. The key is the character to use, and the value is the color to attach to that character. Any character can be a key, but a key must be a single character.

Characters are colored using [chalk](https://www.npmjs.com/package/chalk). Any function chalk has for coloring can be used as a palette color.

```js
const palette = {
  0: 'red',
  1: 'bgRed'
}
```

It's also possible to override the default color by adding a one-space key to the palette.

```js
const palette = {
  ' ': 'blue'
}
```

## Local Development

```bash
git clone https://github.com/gakimball/paint-by-number
cd paint-by-number
npm install
npm test
```

## License

MIT &copy; [Geoff Kimball](http://geoffkimball.com)
