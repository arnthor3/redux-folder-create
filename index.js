#!/usr/bin/env node
const writeFiles = require('./writeFiles');
const createFiles = require('./createFiles');
const updateFiles = require('./updateFiles');

/**
 * Parse the command line arguments
 */
const cmd = require('./cmdParser')(process.argv);

const files = createFiles(cmd);

if (cmd.update) {
  updateFiles(files, cmd)
    .then(() => (writeFiles()))
} else {
  writeFolder(cmd)
    .then(writeFiles);
}