/* eslint-env mocha */

const expect = require('chai').expect;
const styles = require('ansi-styles');
const paint = require('.');

const wrapInCodes = (str, style) => {
  return str.split('').map(char => `${style.open}${char}${style.close}`).join('');
};

describe('Paint', () => {
  it('colors a string, given a color map and palette', () => {
    const input = 'Hello!';
    const colors = ' 00000';
    const palette = {
      ' ': 'default',
      0: 'red'
    };

    const output = paint(input, colors, palette);
    const expected = `H${wrapInCodes('ello!', styles.red)}`;
    expect(output).to.equal(expected);
  });

  it('colors an array of strings, given a color map and palette', () => {
    const input = ['John&', 'Paul&', 'Ringo&', 'George'];
    const colors = ['00000', '11111', '222222', '333333'];
    const palette = {
      0: 'bgBlue',
      1: 'bgRed',
      2: 'bgCyan',
      3: 'bgGreen'
    };

    const output = paint(input, colors, palette);
    const expected = input.map((s, i) => wrapInCodes(s, styles[palette[i]]));
    expect(output).to.eql(expected);
  });
});
