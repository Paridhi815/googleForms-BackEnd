const Server = require('../../src/server');
const Models = require('../../models');

describe('Testcase for test route', () => {
  beforeAll((done) => {
    Models.forms.deleteAllForms().then(() => {
      Models.forms.create({
        id: 100,
        title: 'YOLO',
      }).then(() => {
        Models.questions.deleteAllQuestions().then(() => {
          Models.questions.insertAllQuestions([{
            formId: 100, questionText: 'wassup', type: 'short answer', isRequired: true,
          },
          {
            formId: 100, questionText: 'what?', type: 'date', isRequired: false,
          }]);
        });
      });
      console.log('BEFORE');
      done();
    });
  });

  it('Testing for status code 200', (done) => {
    const options = {
      method: 'GET',
      url: '/forms/100',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  it('Joi Validation Should return 400 for non-numeric formId', (done) => {
    const options = {
      method: 'GET',
      url: '/forms/paridhi',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });

  it('Testing that response is an array', (done) => {
    const options = {
      method: 'GET',
      url: '/forms/100',
    };
    Server.inject(options, (response) => {
      expect(response.result).toBeInstanceOf(Array);
      done();
    });
  });
});
