#!/usr/bin/env node
const folder = require('./src/folder');
const create = require('./src/create');
const files = require('./src/files');
/**
 * Parse the command line arguments
 * if neither the -a or the -f options are set then it will stop
 * and throw an error
 */
const cmd = require('./src/cmdParser')(process.argv);

// If the folder option is not set then set
// the working directory as the folder
if (cmd.folder.length === 0) {
  cmd.folder = process.cwd();
}

// if the actions are set then create an array of objects
if (cmd.actions.length !== 0) {
  cmd.actions = require('./src/actions')(cmd);
}

// Handles the concat case when a user uses just -a
if (cmd.folder === process.cwd()) {
  const partialFiles = create.partials(cmd);
  folder.isStructureAvailable(cmd.folder)
    .then(d => {
      return files.readStructure(d, cmd.folder);
    })
    .then(d => {
      const f = files.concatenate(d, partialFiles);
      return files.writeAll(f);
    })
    .then(d => {
      console.log('DONE');
    })
    .catch(console.error);

} else {
  folder.createFolder(cmd)
    .then(d => {
      return files.writeAll(create.full(cmd));
    })
    .catch(console.error);
}

