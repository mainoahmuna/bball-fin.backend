const request = require('supertest');
const app = require('../app');

describe('GET /players', () => {

    test('should return an array', async () => {
        const response = await request(app).get('/players');
        expect(response.body).toBeInstanceOf(Array);
        expect(response.statusCode).toBe(200);
    })

})