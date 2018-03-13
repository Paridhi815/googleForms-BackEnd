const Server = require('../../src/server');
const Models = require('../../models');

describe('Testcase for test route', () => {
  beforeAll((done) => {
    Models.forms.deleteAllForms()
      .then(() => Models.forms.create({
        id: 100,
        title: 'YOLO',
      }).then(() => Models.questions.deleteAllQuestions()
        .then(() => Models.questions.bulkCreate([{
          formId: 100, questionText: 'wassup', type: 'short answer', isRequired: true, id: 200,
        },
        {
          formId: 100, questionText: 'what?', type: 'date', isRequired: false, id: 500,
        }]))));
    console.log('BEFORE');
    done();
  });

  it('Testing for status code 200', (done) => {
    const options = {
      method: 'POST',
      url: '/responses',
      payload: {
        questionIdWithAnswerArray: [{ questionId: 200, answerText: 'answer' }, { questionId: 500, answerText: '08/12/1995' }],
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(201);
      done();
    });
  });
});
