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
const port = process.env.PORT || (process.env.TEST ? 3001 : 3000);

// Middleware
app.use(bodyParser.json());
app.use('/uploads', express.static(uploadsDir)); // Serve static files from uploads directory

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
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

export default app;
