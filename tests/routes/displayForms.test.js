const Server = require('../../src/server');

describe('Testcase for test route', () => {
  it('Testing for status code 200', (done) => {
    const options = {
      method: 'GET',
      url: '/forms',
    };
    Server.inject(options, (response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
