const Models = require('../../models');

const handler = (request, response) => {
  const { questionIdWithAnswerArray } = request.payload;
  // const parsedArray = JSON.parse(questionIdWithAnswerArray);
  // console.log(parsedArray);
  Models.answers.bulkCreate(questionIdWithAnswerArray).then(() => {
    response('Answered').code(201);
  });
};

const storeResponses = {
  method: 'POST',
  path: '/responses',
  handler,
};

module.exports = storeResponses;
