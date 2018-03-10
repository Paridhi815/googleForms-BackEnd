const Server = require('../../src/server');

describe('Testcase for test route', () => {
  it('Should print Working!.', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    Server.inject(options, (response) => {
      expect(response.payload).toBe('Working!');
      done();
    });
  });

  it('Testing for status code 200', (done) => {
    const options = {
      method: 'GET',
      url: '/',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
