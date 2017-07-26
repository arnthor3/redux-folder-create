const fs = require('fs');
const path = require('path');

const EXISTS = 'EEXIST';

/**
 * Create the folder
 * @param {string} folder
 * @returns Promise
 */
const writeFolder = ({ folder }) => (
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
