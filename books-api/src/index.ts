import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import upload from './middleware';
import { createBook, getBooks, getBook, updateBook, deleteBook, updateBookCover } from './controllers';
import fs from 'fs';
import path from 'path';


dotenv.config();


const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const app = express();
const port = process.env.PORT || 3001;


app.use(bodyParser.json());
app.use('/uploads', express.static(uploadsDir)); 


mongoose.connect(process.env.MONGODB_URI || '')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
  });


app.post('/books', createBook);
app.get('/books', getBooks);
app.get('/books/:id', getBook);
app.put('/books/:id', updateBook);
app.delete('/books/:id', deleteBook);
app.patch('/books/cover-image/:id', upload.single('cover'), updateBookCover);

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
