const fs = require('fs');
const path = require('path');
const folder = require('./folder');

const files = {};

const readFile = (filePath) => (
  new Promise((res, rej) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        rej(err);
      }
      res(data);
    });
  })
);

files.readStructure = (files, folder) => (
  new Promise((res, rej) => {
    const constantsFile = readFile(path.join(folder, files.constants));
    const actionsFile = readFile(path.join(folder, files.actions));
    const reducerFile = readFile(path.join(folder, files.reducer));
    return (
      Promise.all([constantsFile, actionsFile, reducerFile])
        .then(d => {
          res({
            constants: d[0],
            actions: d[1],
            reducer: d[2],
          });
        })
        .catch(rej)
    );
  })
);


/**
 * Create the file
 * @param {string} file
 * @param {string} path
 * @returns Promise
 */
files.write = ({ file, path }) => (
  new Promise((res, rej) => {
    console.log(path);
    fs.writeFile(path, file, (err) => {
      if (err) {
        rej(err);
      }
      console.log(`Created ${path}`);
      res('ok');
    });
  })
);

files.writeAll = (f) => {
  const filesArr = Object.keys(f);
  const promises = filesArr.map(d => files.write(f[d]));
  return Promise.all(promises);
}

files.concatReducer = (full, partial) => {
  const indexOfDefault = full.indexOf('default:');
  return `${full.substr(0, indexOfDefault)}\n${partial}${full.substr(indexOfDefault, full.length)}`
};

files.concatenate = (file, partials) => ({
  constants: {
    file: `${file.constants}${partials.constants.file}`,
    path: partials.constants.path,
  },
  actions: {
    file: `${file.actions}${partials.actions.file}`,
    path: partials.actions.path,
  },
  reducer: {
    file: files.concatReducer(file.reducer, partials.reducer.file),
    path: partials.reducer.path,
  }
});

module.exports = files;
