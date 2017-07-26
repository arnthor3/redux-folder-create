const fs = require('fs');
const path = require('path');

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

const writeFiles = (files) => {
  const filesArr = Object.keys(files).map(d => files[d]);
  const promises = filesArr.map(d => writeFile(d));
  return Promise.all(promises);
}

/**
 * Creates the direcory and the files
 * @param {object} files
 * @param {string} folder
 * @returns Promise
 */
module.exports = writeFiles;

