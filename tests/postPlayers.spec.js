const request = require('supertest');
const app = require('../app');

const testPlayer = {
    "name": "Kevin Durant",
    "team": "Rockets",
    "position": "SF",
}

const incompleteTestPlayer = {
    "name": "Kevin Durant",
    "team": "Rockets",
}

const expectedPostResponse = {
    "name": "Kevin Durant",
    "team": "Rockets",
    "position": "SF",
}

describe('POST /players tests', () => {

    describe('given all required fields', () => {
        test("should respond with 201 status", async () => {
            const reponse = await request(app).post('/players').send(testPlayer);
            expect(reponse.statusCode).toBe(201);
        })

        test("response shoudl contain ", async () => {
            const response = (await request(app).post('/players').send(testPlayer));
            expect(response.body).toMatchObject(expectedPostResponse);
            expect(response.body.id).toBeDefined();
        });
    }) 

    describe('missing required fields', () => {
        test('should return 400 when missing required field', async () => {
            const response = await request(app).post('/players').send(incompleteTestPlayer);
            expect(response.statusCode).toBe(400);
        })
    })
});
