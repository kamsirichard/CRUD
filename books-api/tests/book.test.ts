import request from 'supertest';
import app from '../src/index';

describe('Books API', () => {
  it('should create a new book', async () => {
    const res = await request(app)
      .post('/books')
      .send({
        title: 'Test Book',
        author: 'Test Author',
        publishedDate: '2023-01-01',
        isbn: '1234567890'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Test Book');
  });

  // Add more test cases here
});
