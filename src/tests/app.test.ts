import request from 'supertest';
import app from '../app';

describe('API Tests', () => {
  it('should return API is running', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('API is running!');
  });

  it('should return list of items', async () => {
    const res = await request(app).get('/api/items');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: 1, name: 'Item 1' }]);
  });

  it('should create a new item', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({ name: 'New Item' });
    expect(res.status).toBe(201);
    expect(res.body.name).toBe('New Item');
  });

  it('should validate item creation', async () => {
    const res = await request(app).post('/api/items').send({});
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Name is required');
  });
});
