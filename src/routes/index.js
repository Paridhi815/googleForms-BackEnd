const testRoute = require('./testRoute');
const storeFormsWithQuestions = require('./storeFormsWithQuestions');
const displayForms = require('./displayForms');
const displayQuestionsToAnswer = require('./displayQuestionsToAnswer');
const storeResponses = require('./storeResponses');
const displayResponses = require('./displayResponses');

module.exports = [].concat(
  testRoute, storeFormsWithQuestions,
  displayForms, displayQuestionsToAnswer,
  storeResponses, displayResponses,
);
