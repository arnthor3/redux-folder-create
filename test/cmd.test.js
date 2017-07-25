const cmdParser = require('../cmdParser.js');

const chai = require('chai');
const sinon = require('sinon');

chai.config.includeStack = true;
global.expect = chai.expect;
global.AssertionError = chai.AssertionError;
global.Assertion = chai.Assertion;
global.assert = chai.assert;

const actions = [{
  "action": "onSubmit",
  "constant": "TEST_ON_SUBMIT",
}, {
  "action": "onSubmitError",
  "constant": "TEST_ON_SUBMIT_ERROR",
}, {
  "action": "isFormReady",
  "constant": "TEST_IS_FORM_READY",
}, {
  "action": "testActions",
  "constant": "TEST_TEST_ACTIONS",
}];

describe('cmd-parser', () => {
  it('should accept an array', () => {
    expect(typeof cmdParser).equal('function');

    expect(typeof cmdParser([1,2,3,'-f',4])).to.equal('object');

    expect(function () {}).to.not.throw();

    expect(cmdParser).to.throw('Argument is not an array');

    expect(cmdParser.bind(this, [])).to.throw('The arguments array is empty')
  });

  it('should know how to read the arguments array', () => {
    expect(cmdParser(['path', 'path', '-f', 'test', '-a', 'onSubmit', 'onSubmitError', 'isFormReady', 'testActions']))
      .to.deep.equal({
        folder: 'test',
        actions,
        projectPath: 'path',
        update: false,
      });

    expect(cmdParser(['path', 'path','-a', 'onSubmit', 'onSubmitError', 'isFormReady', 'testActions', '-f', 'test']))
      .to.deep.equal({
        folder: 'test',
        actions,
        projectPath: 'path',
        update: false,
      });

  });

});