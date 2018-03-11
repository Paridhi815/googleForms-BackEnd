const Models = require('../../models');

const handler = (request, response) => {
  const { formId } = request.params;
  const modelPromise = Models.forms.findAll({
    where: {
      id: formId,
    },
    include: [{
      model: Models.questions,
      include: [{
        model: Models.answers,
      }],
    }],
  }).then(formsWithQuestionsAndAnswers => formsWithQuestionsAndAnswers);
  response(modelPromise);
};

const displayResponses = {
  method: 'GET',
  path: '/responses/{formId}',
  handler,
};

module.exports = displayResponses;
