const Server = require('../../src/server');

describe('Testcase for test route', () => {
  it('Testing for status code 200', (done) => {
    const options = {
      method: 'PUT',
      url: '/formsWithQuestions',
      payload: {
        formTitle: 'hal chal',
        questions: '[{"questionText":"wassup","type":"short answer","isRequired":true},{"questionText":"what?","type":"date","isRequired":false}]',
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
