const chai = require('chai');

const config = {};

config.init = () => {
  chai.config.includeStack = true;
  global.expect = chai.expect;
  global.AssertionError = chai.AssertionError;
  global.Assertion = chai.Assertion;
  global.assert = chai.assert;
}

config.actions = [{
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
config.testCmd = ['onSubmit', 'onSubmitError', 'isFormReady', 'testActions'];
config.testActions = ['onSubmit', 'onTest', 'clickBanner', 'sendMessage'];
config.testConstants = ['ON_SUBMIT', 'ON_TEST', 'CLICK_BANNER', 'SEND_MESSAGE'];
config.testConstantsWithNamespace = ['TEST_ON_SUBMIT', 'TEST_ON_TEST', 'TEST_CLICK_BANNER', 'TEST_SEND_MESSAGE'];
config.folderStructure = {
  constants: 'example.constants.js',
  actions: 'example.actions.js',
  reducer: 'example.reducer.js'
};

module.exports = config;