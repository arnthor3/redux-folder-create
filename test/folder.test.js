const folder = require('../src/folder');
const path = require('path');
const sinon = require('sinon');

const config = require('./config');

config.init();

describe('folder', () => {
  it('should return a folder structure', (done) => {
    folder.isStructureAvailable(path.join(process.cwd(), 'example'))
      .then(d => {
        expect(true).to.equal(true);
        done();
      })
      .catch(err => {
        expect(true).to.equal(false);
        done();
      })
  })
});
