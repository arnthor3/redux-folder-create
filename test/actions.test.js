const actions = require('../actions');

const chai = require('chai');
const sinon = require('sinon');

chai.config.includeStack = true;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;

const testActions = ['onSubmit', 'onTest', 'clickBanner', 'sendMessage'];
const testConstants = ['ON_SUBMIT', 'ON_TEST', 'CLICK_BANNER', 'SEND_MESSAGE'];
const testConstantsWithNamespace = ['TEST_ON_SUBMIT', 'TEST_ON_TEST', 'TEST_CLICK_BANNER', 'TEST_SEND_MESSAGE'];

describe('createFiles', () => {
  it('should accept an array and an optional namespace string', () => {
    const result =  actions(testActions);
    expect(result.map(d => d.action)).to.deep.equal(testActions);
    expect(result.map(d => d.constant)).to.deep.equal(testConstants);
  });

  it('should know how to read the arguments array and namespace it', () => {
    const result =  actions(testActions, 'test');
    expect(result.map(d => d.action)).to.deep.equal(testActions);
    expect(result.map(d => d.constant)).to.deep.equal(testConstantsWithNamespace);
  });
});