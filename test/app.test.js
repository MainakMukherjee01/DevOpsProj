const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('Should respond with "Hello,Multi-Cloud CI/CD!"', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello,Multi-Cloud CI/CD!');
  });
});
