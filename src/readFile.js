const fs = require('fs');
const path = require('path');

const checkFolder = (folderPath) => {
  return new Promise((res, rej) => {
    fs.readdir(folderPath, (err, files) => {
      if(err) rej(err);
      else res(files);
    });
  });
}