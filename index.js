#!/usr/bin/env node
const readFiles = require('./src/readFile');
/**
 * Parse the command line arguments
 * if neither the -a or the -f options are set then it will stop
 * and throw an error
 */
const cmd = require('./cmdParser')(process.argv);

// If the folder option is not set then set
// the working directory as the folder
if (cmd.folder.length === 0) {
  cmd.folder = process.cwd();
}

// if the actions are set then create an array of objects
if (cmd.actions.length !== 0) {
  cmd.array = require('./src/actions')(cmd);
}

if (cmd.folder === process.cwd()) {
  const actions = readFiles.getActions(cmd.folder);
  const reducer = readFiles.getReducer(cmd.folder);
  const constants = readFiles.getConstants(cmd.folder);

  const newActions = readFiles.concat(actions, cmd);
  const newReducer = readFiles.concat(reducer, cmd);
  const newConstants = readFiles.concat(constants, cmd);

}

const files = require('./src/createFiles')(cmd);
