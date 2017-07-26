const createFiles = require('../createFiles');

const config = require('./config');

const chai = require('chai');
const sinon = require('sinon');

config.init();

describe('writeFiles', () => {
  it('should create files', () => {
    const files = createFiles({ actions: config.actions, folder: 'test'});
    expect(files.actions.file).to.be.not.equal(null);
  });
})