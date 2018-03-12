const Server = require('../../src/server');
const Models = require('../../models');

describe('Testcase for test route', () => {
  beforeAll((done) => {
    Models.questions.deleteAllQuestions().then(() => {
      console.log('BEFORE');
      done();
    });
  });
  it('Testing for status code 200', (done) => {
    const options = {
      method: 'PUT',
      url: '/formsWithQuestions',
      payload: {
        formTitle: 'hal chal',
        questions: [{ questionText: 'wassup', type: 'short answer', isRequired: true }, { questionText: 'what?', type: 'date', isRequired: false }],
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(201);
      done();
    });
  });

  it('Responds with 400 statusCode for empty form title', (done) => {
    const options = {
      method: 'PUT',
      url: '/formsWithQuestions',
      payload: {
        formTitle: '',
        questions: [{ questionText: 'wassup', type: 'short answer', isRequired: true }, { questionText: 'what?', type: 'date', isRequired: false }],
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });

  it('Responds with 400 statusCode for isRequired not Boolean', (done) => {
    const options = {
      method: 'PUT',
      url: '/formsWithQuestions',
      payload: {
        formTitle: '',
        questions: [{ questionText: 'wassup', type: 'short answer', isRequired: '' }, { questionText: 'what?', type: 'date', isRequired: false }],
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });

  it('Responds with 400 statusCode for questionText empty', (done) => {
    const options = {
      method: 'PUT',
      url: '/formsWithQuestions',
      payload: {
        formTitle: '',
        questions: [{ questionText: '', type: 'short answer', isRequired: '' }, { questionText: 'what?', type: 'date', isRequired: false }],
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });

  it('Responds with 400 statusCode for questionType isnt a string', (done) => {
    const options = {
      method: 'PUT',
      url: '/formsWithQuestions',
      payload: {
        formTitle: '',
        questions: [{ questionText: '', type: 123, isRequired: '' }, { questionText: 'what?', type: 'date', isRequired: false }],
      },
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(400);
      done();
    });
  });

  afterAll((done) => {
    Models.questions.destroy({ cascade: true, truncate: true }).then(() => {
      console.log('BEFORE');
      done();
    });
  });
});
