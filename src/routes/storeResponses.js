const Models = require('../../models');

const handler = (request, response) => {
  const { questionIdWithAnswerObject } = request.payload;
  // const parsedArray = JSON.parse(questionIdWithAnswerArray);
  // console.log(parsedArray);
  const answersArray = [];
  Object.keys(questionIdWithAnswerObject).forEach((key) => {
    const qobj = { questionId: key, answerText: questionIdWithAnswerObject[key] };
    answersArray.push(qobj);
  });

  Models.answers.bulkCreate(answersArray).then(() => {
    response('Answered').code(201);
  });
};

const storeResponses = {
  method: 'POST',
  path: '/responses',
  handler,
};

module.exports = storeResponses;
