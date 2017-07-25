const fs = require('fs');
const path = require('path');

const readFile = (type, fileArray = []) => {
  return new Promise((res, rej) => {
    const fileIndex = fileArray.findIndex(d => d.indexOf(type) !== -1);
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

}


module.exports = (files, cmd) => {
  return new Promise((res, rej) => {
    if (!cmd.update) {
      res(files, cmd.folder);
    }
    readdir()
      .then(concat)
      .then(f => { res(f, cmd.folder)})
      .catch(err => rej(err));
  });
};
