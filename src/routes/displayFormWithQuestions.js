const Models = require('../../models');

const handler = (request, response) => {
  const { formId } = request.params;
  const modelPromise = Models.forms.findAll({
    where: {
      id: formId,
    },
    include: [{
      model: Models.questions,
    }],
  }).then(formsWithQuestions => formsWithQuestions);
  response(modelPromise);
};

const displayFormWithQuestions = {
  method: 'GET',
  path: '/formsWithQuestions/{formId}',
  handler,
};

module.exports = displayFormWithQuestions;
