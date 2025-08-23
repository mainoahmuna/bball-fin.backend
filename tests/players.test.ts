import request from 'supertest';
import app from '../src/app';
import { prisma } from '../src/db';

beforeEach(async () => {
  await prisma.player.deleteMany();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('GET /players', () => {
  test('should return an array and 200', async () => {
    const res = await request(app).get('/players');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('empty DB returns []', async () => {
    await prisma.player.deleteMany();
    const res = await request(app).get('/players');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });
});

describe('POST /players', () => {
  const validBody = { name: 'Kevin Durant', team: 'Rockets', position: 'SF' };

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

describe('GET /players/:id', () => {
  test('should return player by id', async () => {
    const createRes = await request(app).post('/players').send({ name: 'LeBron', team: 'Lakers', position: 'SF' });
    const id = createRes.body.id;
    const res = await request(app).get(`/players/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject({ name: 'LeBron', team: 'Lakers', position: 'SF' });
  });

  test('should return 404 if not found', async () => {
    const res = await request(app).get('/players/nonexistent-id');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error');
  });
});

describe('PUT /players/:id', () => {
  test('should update player and return updated record', async () => {
    const createRes = await request(app).post('/players').send({ name: 'Curry', team: 'Warriors', position: 'PG' });
    const id = createRes.body.id;
    const updateRes = await request(app).put(`/players/${id}`).send({ team: 'Kings' });
    expect(updateRes.statusCode).toBe(200);
    expect(updateRes.body.team).toBe('Kings');
    expect(updateRes.body.name).toBe('Curry');
  });

  test('should return 404 if not found', async () => {
    const res = await request(app).put('/players/nonexistent-id').send({ team: 'Kings' });
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error');
  });
});

describe('DELETE /players/:id', () => {
  test('should delete player and return confirmation', async () => {
    const createRes = await request(app).post('/players').send({ name: 'Giannis', team: 'Bucks', position: 'PF' });
    const id = createRes.body.id;
    const deleteRes = await request(app).delete(`/players/${id}`);
    expect(deleteRes.statusCode).toBe(200);
    expect(deleteRes.body).toHaveProperty('message', 'Player deleted');
    expect(deleteRes.body).toHaveProperty('id', id);
  });

  test('should return 404 if not found', async () => {
    const res = await request(app).delete('/players/nonexistent-id');
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error');
  });
});