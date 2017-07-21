const fs = require('fs');
const path = require('path');
const EXISTS = 'EEXIST';
const folder = process.argv[2];

const actions = require('./actions')(folder);
const initialState = require('./initialState')(folder);
const reducer = require('./reducer')(folder);
const constants = require('./constants')(folder);

const actionsPath =  path.join(__dirname, `${folder}/${folder}.action.js`);
const reducerPath = path.join(__dirname, `${folder}/${folder}.reducer.js`)
const constantsPath = path.join(__dirname, `${folder}/${folder}.constants.js`);
const initialStatePath = path.join(__dirname, `${folder}/${folder}.initialState.js`);

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

const writeFile = (file, filePath) => (
  new Promise((res, rej) => {
    fs.writeFile(filePath, file, (err) => {
      if (err) {
        rej(err);
      }
      res('ok');
    });
  })
);

writeFolder(path.join(__dirname, folder))
  .then(d => writeFile(actions, actionsPath))
  .then(d => writeFile(initialState, initialStatePath))
  .then(d => writeFile(reducer, reducerPath))
  .then(d => writeFile(constants, constantsPath))
  .then(d => { console.log(`*** Redux-Folder-Creator create ${folder} ***`)})
  .catch(err => console.log(err));


