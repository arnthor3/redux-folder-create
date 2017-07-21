#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const writeFiles = require('./writeFiles');
const createFiles = require('./createFiles');
const cmdParser = require('./cmdParser');

const cmd = cmdParser(process.argv);

const files = createFiles(cmd);
writeFiles(files, cmd.folder);
