import request from 'supertest';
import app from '../src/index';

describe('Books API', () => {
  let existingBookIsbn = '1234567890';

  beforeAll(async () => {
    // Create a book with the ISBN to ensure it exists
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
        isbn: existingBookIsbn // Use the existing ISBN to test the conflict error
      });
    expect(res.statusCode).toEqual(409); // Expecting a 409 Conflict status code
    expect(res.body).toHaveProperty('error', 'Book with this ISBN already exists');
  });

  // Add more test cases here
});
