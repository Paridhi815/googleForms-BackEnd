const Models = require('../../models');
// const Joi = require('joi');

const handler = (request, response) => {
  // console.log(request);

  const { formTitle } = request.payload;
  const { questions } = request.payload;
  // questions = JSON.parse(questions);
  Models.forms.createNewForm(formTitle).then((data) => {
    let questionsWithFormId = {};
    const questionsWithFormIdArray = [];
    questions.forEach((questionObject) => {
      questionsWithFormId = questionObject;
      questionsWithFormId.formId = data.dataValues.id;
      questionsWithFormIdArray.push(questionsWithFormId);
    });
    return Models.questions.insertAllQuestions(questionsWithFormIdArray)
      .then(() => response().code(201));
  });
};

const storeFormsWithQuestions = {
  method: 'POST',
  path: '/forms',
  handler,
  // config: {
  //   validate: {
  //     payload: {
  //       formTitle: Joi.string().min(3).max(30)
  //         .required(),
  //       questions: Joi.array().items(Joi.object({
  //         questionText: Joi.string().required(),
  //         type: Joi.string().required(),
  //         isRequired: Joi.boolean().required(),
  //       })),
  //     },
  //   },
  // },
};

module.exports = storeFormsWithQuestions;

