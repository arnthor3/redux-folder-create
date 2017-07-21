const ejs = require('ejs');
const path = require('path');

const directory = process.cwd();

const strFile = (type, folder) => (
  path.join(directory, `${folder}/${folder}.${type}.js`)
);

module.exports = (cmd) => {
  return {
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
    },
    initialState: {
      file: ejs.render(require('./templates/initialState'), cmd),
      path: strFile('initialState', cmd.folder),
    }
  }
};
