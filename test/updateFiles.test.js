const updateFiles = require('../updateFiles')
const createFiles = require('../createFiles');

const config = require('./config');
const sinon = require('sinon');

config.init();

describe('updateFiles', () => {
  it('should return files when update is false', (done) => {
    const files = createFiles({ actions: config.actions, folder: 'test'});
    updateFiles(files, { folder: '../example', update: false})
      .then((f) => {
        expect(f).to.deep.equal(files);
        done();
      });
  });
  it('should update ', (done) => {
    const files = createFiles({ actions: config.actions, folder: 'test'});
    updateFiles(files, { folder: 'example', update: true})
      .then((f) => {
        expect(f).to.deep.equal(files);
        done();
      })
      .catch(err => {
        done();
        expect(err).to.equal(null);
      });
  })
})