const Models = require('../../models');

const handler = (request, response) => {
  const { formTitle } = request.payload;
  let { questions } = request.payload;
  questions = JSON.parse(questions);
  Models.forms.create({
    title: formTitle,
  }).then((data) => {
    let questionsWithFormId = {};
    const questionsWithFormIdArray = [];
    questions.forEach((questionObject) => {
      questionsWithFormId = questionObject;
      questionsWithFormId.formId = data.dataValues.id;
      questionsWithFormIdArray.push(questionsWithFormId);
    });
    return Models.questions.bulkCreate(questionsWithFormIdArray).then(() => Models.questions.findAll().then((questionsArray) => {
      response(questionsArray);
    }));
  });
};

const storeFormsWithQuestions = {
  method: 'PUT',
  path: '/formsWithQuestions',
  handler,
};

module.exports = storeFormsWithQuestions;

