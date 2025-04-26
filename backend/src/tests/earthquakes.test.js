const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose');

describe('Earthquakes API', () => {
  beforeAll(async () => {
    // Connect to test database
    await mongoose.connect(process.env.TEST_DATABASE_URL);
  });

  afterAll(async () => {
    // Close database connection
    await mongoose.connection.close();
  });

  describe('GET /api/earthquakes', () => {
    it('should return a list of earthquakes', async () => {
      const response = await request(app)
        .get('/api/earthquakes')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /api/earthquakes/:id', () => {
    it('should return a specific earthquake', async () => {
      const response = await request(app)
        .get('/api/earthquakes/12345')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('magnitude');
      expect(response.body).toHaveProperty('location');
    });

    it('should return 404 for non-existent earthquake', async () => {
      await request(app)
        .get('/api/earthquakes/nonexistent')
        .expect(404);
    });
  });
}); 