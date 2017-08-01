const create = require('../src/create');
const path = require('path');
const chai = require('chai');
const sinon = require('sinon');

const config = require('./config');

config.init();

describe('create', () => {
  it('Should know how to create a full body files', () => {
    const fullFiles = create.fullFiles({ actions: config.actions, folder: 'test' });
  });
  it('should know how to make a partial file as well', () => {
    const partialFiles = create.partials({ actions: config.actions, folder: 'test' });
  });
});
