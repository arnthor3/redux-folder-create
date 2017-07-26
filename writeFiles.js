const fs = require('fs');
const path = require('path');
const EXISTS = 'EEXIST';

/**
 * Create the folder
 * @param {string} folderPath
 * @returns Promise
 */
const writeFolder = (folderPath) => (
  new Promise((res, rej) => {
    fs.mkdir(folderPath, 0777, (err) => {
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
/**
 * Create the file
 * @param {string} file
 * @param {string} path
 * @returns Promise
 */
const writeFile = ({ file, path }) => (
  new Promise((res, rej) => {
    fs.writeFile(path, file, (err) => {
      if (err) {
        rej(err);
      }
      console.log(`Created ${file}`);
      res('ok');
    });
  })
);

/**
 * Creates the direcory and the files
 * @param {object} files
 * @param {string} folder
 * @returns Promise
 */
module.exports = (files, folder) => {
  return new Promise((res, rej) => {
    writeFolder(path.join(process.cwd(), folder))
      .then(d => writeFile(files.actions))
      .then(d => writeFile(files.initialState))
      .then(d => writeFile(files.reducer))
      .then(d => writeFile(files.constants))
      .then(d => { res(); })
      .catch(err => rej(err));
  })
}

