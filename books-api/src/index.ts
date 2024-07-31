import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import upload from './middleware';
import { createBook, getBooks, getBook, updateBook, deleteBook, updateBookCover } from './controllers';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || '')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.post('/books', createBook);
app.get('/books', getBooks);
app.get('/books/:id', getBook);
app.put('/books/:id', updateBook);
app.delete('/books/:id', deleteBook);
app.patch('/books/cover-image/:id', upload.single('cover'), updateBookCover);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app; // Ensure there's a default export
