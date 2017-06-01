const chalk = require('chalk');

module.exports = (input, colors, palette) => {
  const string = typeof input === 'string';
  const defaultColor = palette[' '] || null;

  if (string) {
    input = [input];
    colors = [colors];
  }

  // Iterate through each line of the input
  const output = input.map((line, index) => {
    let newLine = '';

    // Iterate through each character of the line
    for (let ch = 0; ch < line.length; ch++) {
      // Find the color on the map that matches the character
      let newChar = line[ch];
      const color = colors[index] && palette[colors[index][ch] || defaultColor];

      if (color && chalk[color]) {
        newChar = chalk[color](line[ch]);
      }

      newLine += newChar;
    }

    return newLine;
  });

  if (string) {
    return output[0];
  }

  return output;
};
