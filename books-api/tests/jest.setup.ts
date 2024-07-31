import mongoose from 'mongoose';
import app from '../src/index';
import { Server } from 'http';

// trying to use a different port for testing
const PORT = 3001;
let server: Server;

beforeAll((done) => {
  
  server = app.listen(PORT, () => {
    console.log(`Test server running on port ${PORT}`);
    done();
  });
});

afterAll((done) => {
  mongoose.connection.close();
  server.close(done);
});
