#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const writeFiles = require('./writeFiles');
const createFiles = require('./createFiles');
const cmdParser = require('./cmdParser');
const updateFiles = require('./updateFiles');

const cmd = cmdParser(process.argv);

updateFiles(createFiles(cmd), cmd)
  .then(writeFiles)
  .catch(err => {
    console.error(err.message);
  });
