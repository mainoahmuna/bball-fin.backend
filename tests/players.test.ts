import request from 'supertest';
import app from '../src/app';

describe('GET /players', () => {
  test('should return an array and 200', async () => {
    const res = await request(app).get('/players');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe('POST /players', () => {
  const validBody = { name: 'Kevin Durant', team: 'Suns', position: 'SF' };

  test('given all required fields, should respond 201 and return player with id', async () => {
    const res = await request(app).post('/players').send(validBody);
    expect(res.statusCode).toBe(201);
    expect(res.body).toMatchObject(validBody);
    expect(res.body.id).toBeDefined();
  });

  test('missing fields should respond 400', async () => {
    const res = await request(app).post('/players').send({ name: 'KD' });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});