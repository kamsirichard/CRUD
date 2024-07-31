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
  isbn: { type: String, required: true, unique: true }, 
  coverImage: { type: String }
});

const Book = mongoose.model<IBook>('Book', bookSchema);

export default Book;
