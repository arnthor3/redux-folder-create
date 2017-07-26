const ejs = require('ejs');
const path = require('path');

const directory = process.cwd();

/**
 * Creates the path for the file to be saved to
 * @param {string} type The type of file to be created
 * @param {string} folder The folder name
 * @returns Void
 */
const strFile = (type, folder) => (
  path.join(directory, `${folder}/${folder}.${type}.js`)
);

module.exports = (cmd) => {
  const initialState = (
    { initialState: {
      file: ejs.render(require('./templates/initialState'), cmd),
      path: strFile('initialState', cmd.folder),
    }})
  const files = {
    actions: {
      file: ejs.render(require('./templates/actions'), cmd),
      path: strFile('actions', cmd.folder),
    },
    reducer: {
      file: ejs.render(require('./templates/reducer'), cmd),
      path: strFile('reducer', cmd.folder),
    },
    constants: {
      file: ejs.render(require('./templates/constants'), cmd),
      path: strFile('constants', cmd.folder),
    }
  };
  if (!cmd.update) {
    return Object.assign({}, files, initialState);
  }
  return files;
};
