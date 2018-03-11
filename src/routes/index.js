const testRoute = require('./testRoute');
const storeFormsWithQuestions = require('./storeFormsWithQuestions');
const displayForms = require('./displayForms');
const displayFormWithQuestions = require('./displayFormWithQuestions');
const storeResponses = require('./storeResponses');
const displayResponses = require('./displayResponses');

module.exports = [].concat(
  testRoute, storeFormsWithQuestions,
  displayForms, displayFormWithQuestions,
  storeResponses, displayResponses,
);
