import request from 'supertest';
import app from '../src/index';

describe('Books API', () => {
  let existingBookIsbn = '1234567890';

  beforeAll(async () => {
    
    await request(app)
      .post('/books')
      .send({
        title: 'Existing Book',
        author: 'Existing Author',
        publishedDate: '2023-01-01',
        isbn: existingBookIsbn
      });
  });

  it('should create a new book', async () => {
    const res = await request(app)
      .post('/books')
      .send({
        title: 'Test Book',
        author: 'Test Author',
        publishedDate: '2023-01-01',
        isbn: existingBookIsbn 
      });
    expect(res.statusCode).toEqual(409); 
    expect(res.body).toHaveProperty('error', 'Book with this ISBN already exists');
  });

 
});
