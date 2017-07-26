const actions = require('../actions');
const config = require('./config');

const sinon = require('sinon');

config.init();

describe('createFiles', () => {
  it('should accept an array and an optional namespace string', () => {
    const result =  actions(config.testActions);
    expect(result.map(d => d.action)).to.deep.equal(config.testActions);
    expect(result.map(d => d.constant)).to.deep.equal(config.testConstants);
  });

  it('should know how to read the arguments array and namespace it', () => {
    const result =  actions(config.testActions, 'test');
    expect(result.map(d => d.action)).to.deep.equal(config.testActions);
    expect(result.map(d => d.constant)).to.deep.equal(config.testConstantsWithNamespace);
  });
});