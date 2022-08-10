const request = require("supertest");
const app = require('.');

describe('POST /v1/feedback Api testing', () => {
     it('should respond with a 200 status code', async () => {
         // QTODO: delete endpoint for mongoDb extra data
        const body = { 
            feedback: 'TEST this is a feedback'
         };
         const response = await request(app).post('/v1/feedback').set('host', 'localhost:3000').send(body);
         expect(response.statusCode).toBe(200);
     });
     it('should respond with a 400 status code', async () => {
        const body = { 
            feedback: undefined,
         };
        const response = await request(app).post('/v1/feedback').send(body);
        expect(response.statusCode).toBe(400);
     });
     it('should respond with Missing feedback field"', async () => {
         const error = { 
            error: 'Missing feedback field'
         };
        const response = await request(app).post('/v1/feedback').set('host', 'localhost:3000');
        expect(JSON.parse(response.text)).toEqual(error)
        expect(response.statusCode).toBe(400);
     });
});


describe('GET /v1/feedback Api testing', () => { 
    it('should respond with a 200 status code', async () => {
        const host = 'localhost:3000';
        const response = await request(app).get(`/v1/feedback/${host}`);
        expect(response.statusCode).toBe(200);
    });
    it('should respond with a 404 status code', async () => {
        const response = await request(app).get('/v1/feedback').expect(404);
        expect(response.statusCode).toBe(404);
    });
});