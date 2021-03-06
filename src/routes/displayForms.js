const Models = require('../../models');


const handler = (request, response) => {
  const modelPromise = Models.forms.findAllForms().then((formsArray) => {
    response(formsArray);
  });
  return modelPromise;
};

const displayForms = {
  method: 'GET',
  path: '/forms',
  handler,
};

module.exports = displayForms;
