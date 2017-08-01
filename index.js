#!/usr/bin/env node
const readFiles = require('./src/readFile');
const folder = require('./src/folder');
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
  cmd.actions = require('./src/actions')(cmd);
}

// Handles the concat case when a user uses just -a
if (cmd.folder === process.cwd()) {
  folder.isStructureAvailable(cmd.folder)
    .then(d => {
      const partialFiles = create.partials(cmd);
      const newFiles = files.concat(d, partialFiles);
      return files.writeAll(newFiles);
    })
    .then(d => {
      console.log('DONE');
    })
    .then(d => concat)
    .catch(console.error);

} else {
  folder.create(cmd)
    .then(d => {
      return files.writeAll(create.full(cmd));
    })
    .catch(console.error);
}

