const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('Should respond with "Hello, This is new Multi-Cloud CI/CD!', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, This is new Multi-Cloud CI/CD!');
  });
});

describe('GET /health', () => {
  it('Should respond with a health check object', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('uptime');
    expect(res.body).toHaveProperty('message', 'OK');
    expect(res.body).toHaveProperty('timestamp');
  });
});