const path = require('path');

const actionsTemplate = require('../templates/actions');
const reducerTemplate = require('../templates/reducer');
const constantTemplate = require('../templates/constants');

const create = {};

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

const strFilePartials = (type, folder) => (
  path.join(directory, `${folder}.${type}.js`)
);

create.fullFiles = (cmd) => ({
  initialState: {
      file: require('../templates/initialState'),
      path: strFile('initialState', cmd.folder),
  },
  actions: {
      file: actionsTemplate.fullBody(cmd.folder, cmd.actions),
      path: strFile('actions', cmd.folder),
    },
    reducer: {
      file: reducerTemplate.fullBody(cmd.folder, cmd.actions.map(d => d.constant)),
      path: strFile('reducer', cmd.folder),
    },
    constants: {
      file: constantTemplate.exports(cmd.folder, cmd.actions.map(d => d.constant)),
      path: strFile('constants', cmd.folder),
    }
});

create.partials = (cmd) => ({
  actions: {
    file: actionsTemplate.createActions(cmd.actions),
    path: strFilePartials('actions', cmd.folder),
  },
  reducer: {
    file: reducerTemplate.partial(cmd.actions.map(d => d.constant)),
    path: strFilePartials('reducer', cmd.folder),
  },
  constants: {
    file: constantTemplate.exports(cmd.folder, cmd.actions.map(d => d.constant)),
    path: strFilePartials('constants', cmd.folder),
  }
});

module.exports = create;
