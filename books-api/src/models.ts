// src/models.ts
import mongoose, { Document, Schema } from 'mongoose';

interface IBook extends Document {
  title: string;
  author: string;
  isbn: string;
  coverImage?: string;
}

const bookSchema: Schema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true, unique: true }, // Ensure ISBN is unique
  coverImage: { type: String }
});

const Book = mongoose.model<IBook>('Book', bookSchema);

export default Book;
