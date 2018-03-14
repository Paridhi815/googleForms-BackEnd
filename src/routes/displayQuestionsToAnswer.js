const Models = require('../../models');
const Joi = require('joi');


const handler = (request, response) => {
  const { formId } = request.params;
  const modelPromise = Models.questions.findQuestionsWithFormId(formId)
    .then(formsWithQuestions => formsWithQuestions);
  response(modelPromise);
};

const displayFormWithQuestions = {
  method: 'GET',
  path: '/forms/{formId}',
  handler,
  // config: {
  //   validate: {
  //     params: {
  //       formId: Joi.number().integer()
  //         .required(),
  //     },
  //   },
  // },
};

module.exports = displayFormWithQuestions;


// const modelPromise = Models.forms.findAll({
//   where: {
//     id: formId,
//   },
//   include: [{
//     model: Models.questions,
//   }],
// })
