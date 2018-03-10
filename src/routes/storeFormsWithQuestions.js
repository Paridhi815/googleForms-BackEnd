const Models = require('../../models');

const handler = (request, response) => {
  const { formTitle } = request.payload;
  const { questions } = request.payload;
  Models.forms.create({
    title: formTitle,
  }).then((data) => {
    response('good');
  });
};

const storeFormsWithQuestions = {
  method: 'PUT',
  path: '/formsWithQuestions',
  handler,
};

module.exports = storeFormsWithQuestions;

