const constants = {};

constants.export = (constant) => (
  `export const ${constant} = '${constant}';\n`
);

constants.exports = (folder, argConstants) => (
  `${argConstants.map(constants.export).join('')}`
);

module.exports = constants;