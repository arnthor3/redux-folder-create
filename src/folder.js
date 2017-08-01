const fs = require('fs');
const path = require('path');

const folderModule = {};

const EXISTS = 'EEXIST';
const CONSTANTS = 'constants';
const ACTIONS = 'actions';
const REDUCER = 'reducer';

const errorMsg = (type) => `${type} not found, did you run command in the redux folder`;

const readDirPromise = (folderPath) => (
  new Promise((res, rej) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        rej(err);
      }
      res(files);
    });
  })
);

const findFile = (file, type) => (
  file.findIndex(d => d.indexOf(type) !== -1)
);

const returnFilePath = (files, type) => {
  const index = findFile(files, type);
  if (index !== -1) {
    return files[index];
  }
  throw new Error(errorMsg(type));
}

const findFiles = (files) => {
  const retObj = {};
  retObj.constants = returnFilePath(files, CONSTANTS);
  retObj.actions = returnFilePath(files, ACTIONS);
  retObj.reducer = returnFilePath(files, REDUCER);
  return retObj;
}

folderModule.isStructureAvailable = (folderPath) => (
  new Promise((res, rej) => {
    readDirPromise(folderPath)
      .then(findFiles)
      .then(res)
      .catch(rej);
  })
);

/**
 * Create the folder
 * @param {string} folder
 * @returns Promise
 */
folderModule.writeFolder = ({ folder }) => (
  new Promise((res, rej) => {
    fs.mkdir(path.join(process.cwd(), cmd.folder), 0777, (err) => {
      if (err) {
        if (err.code = EXISTS) {
          res('ok');
        } else {
          rej(err);
        }
      } else {
        res ('ok');
      }
    })
  })
);

module.exports = folderModule;
