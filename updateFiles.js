const fs = require('fs');
const path = require('path');

const readFile = (type, fileArray = []) => {
  return new Promise((res, rej) => {
    const fileIndex = fileArray.findIndex(d => d.indexOf(type) !== -1);
    if (fileIndex < 0) rej('file not found');
    fs.readFile(fileArray[fileIndex], 'utf-8', (err, data) => {
      if (err) rej(err);
      res(data);
    });
  })
};

const readdir = () => {
  return new Promise((res, rej) => {
    fs.readdir(process.cwd(), (err, files) => {
      if (err) {
        rej(err);
      }
      const constants = readFile('constants', files);
      const reducer = readFile('reducer', files);
      const actions = readFile('actions', files);
      Promise.all([constants, reducer, actions])
        .then(f => res(f))
        .catch(rej)
    })
  })
}

const concat = (promisedFiles, files) => {
  return new Promise((res, rej) => {
    files.constants.file += promisedFiles[0];
    files.reducer.file += promisedFiles[1];
    files.actions.file += promisedFiles[2];
    res(files);
  });
};


module.exports = (files, cmd) => {
  return new Promise((res, rej) => {
    if (!cmd.update) {
      res(files, cmd.folder);
    }
    readdir()
      .then((pf) => { return concat(pf, files) })
      .then(f => { res(f, cmd.folder)})
      .catch(err => rej(err));
  });
};
