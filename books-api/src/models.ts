import mongoose, { Document, Schema, model } from 'mongoose';

interface IBook extends Document {
  title: string;
  author: string;
  publishedDate: Date;
  isbn: string;
  coverImage?: string;
}

const bookSchema = new Schema<IBook>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  isbn: { type: String, required: true, unique: true },
  coverImage: String
});

const Book = model<IBook>('Book', bookSchema);
export default Book;
