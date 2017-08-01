const files = require('../src/files');
const create = require('../src/create');
const path = require('path');
const chai = require('chai');
const sinon = require('sinon');

const config = require('./config');

config.init();

describe('files', () => {
  it('should return a all the needed files within folder structure', (done) => {
    files.readStructure(config.folderStructure, path.join(process.cwd(), 'example'))
      .then(d => {
        expect(typeof d).to.equal('object');
        expect(true).to.equal(true);
        done();
      })
      .catch(err => {
        console.log(err);
        expect(true).to.equal(false);
        done();
      })
  });
  it('should be able to concat files', (done) => {
    files.readStructure(config.folderStructure, path.join(process.cwd(), 'example'))
      .then(d => {
        const partialFiles = create.partials({ actions: config.actions, folder: 'test' });
        const newFiles = files.concat(d, partialFiles);
        console.log(newFiles.reducer.path);
        done();
      })
      .catch(err => {
        ;
        done();
      })
  })
});
