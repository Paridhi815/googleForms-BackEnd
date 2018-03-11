const Models = require('../../models');

const handler = (request, response) => {
  let { questionIdWithAnswerArray } = request.payload;
  questionIdWithAnswerArray = JSON.parse(questionIdWithAnswerArray);
  const modelPromise = Models.answers.bulkCreate(questionIdWithAnswerArray)
    .then(createdAnswerTable => createdAnswerTable);
  response(modelPromise);
};

const storeResponses = {
  method: 'PUT',
  path: '/responses',
  handler,
};

module.exports = storeResponses;
