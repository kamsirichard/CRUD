import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import upload from './middleware';
import { createBook, getBooks, getBook, updateBook, deleteBook, updateBookCover } from './controllers';
import fs from 'fs';
import path from 'path';

// Load environment variables from .env file
dotenv.config();

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static(uploadsDir)); // Serve static files from uploads directory

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || '', {
  // No need for useNewUrlParser and useUnifiedTopology options in Mongoose 6.x
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  });

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Books API');
});

// API Routes
app.post('/books', createBook);
app.get('/books', getBooks);
app.get('/books/:id', getBook);
app.put('/books/:id', updateBook);
app.delete('/books/:id', deleteBook);
app.patch('/books/cover-image/:id', upload.single('cover'), updateBookCover);

// Start the server
if (process.env.NODE_ENV !== 'test') {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  server.on('error', (err) => {
    console.error('Server startup error:', err);
    process.exit(1);
  });

  server.on('close', () => {
    console.log('Server has closed.');
  });

  process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1); 
  });

  process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1); 
  });
}

export default app;
