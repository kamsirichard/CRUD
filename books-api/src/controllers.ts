import { Request, Response } from 'express';
import Book from './models';

// Create a new book
export const createBook = async (req: Request, res: Response) => {
  try {
    console.log('Incoming request to create a book:', req.body);
    const book = new Book(req.body);
    await book.save();
    console.log('Book created successfully:', book);
    res.status(201).json(book);
  } catch (err: unknown) {
    console.error('Error creating book:', err);
    if (err instanceof Error) {
      if (err.message.includes('duplicate key error')) {
        res.status(409).json({ error: 'Book with this ISBN already exists' });
      } else {
        res.status(400).json({ error: err.message });
      }
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// Get all books
export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    console.log('Retrieved books:', books);
    res.status(200).json(books);
  } catch (err: unknown) {
    console.error('Error retrieving books:', err);
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// Get a single book by ID
export const getBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      console.log('Book not found for ID:', req.params.id);
      return res.status(404).json({ error: 'Book not found' });
    }
    console.log('Retrieved book:', book);
    res.status(200).json(book);
  } catch (err: unknown) {
    console.error('Error retrieving book:', err);
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// Update a book by ID
export const updateBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      console.log('Book not found for ID:', req.params.id);
      return res.status(404).json({ error: 'Book not found' });
    }
    console.log('Book updated successfully:', book);
    res.status(200).json(book);
  } catch (err: unknown) {
    console.error('Error updating book:', err);
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// Delete a book by ID
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      console.log('Book not found for ID:', req.params.id);
      return res.status(404).json({ error: 'Book not found' });
    }
    console.log('Book deleted successfully:', book);
    res.status(204).send();
  } catch (err: unknown) {
    console.error('Error deleting book:', err);
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

// Update book cover image
export const updateBookCover = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      console.log('Book not found for ID:', req.params.id); 
      return res.status(404).json({ error: 'Book not found' });
    }
    book.coverImage = req.file?.path || '';
    await book.save();
    console.log('Book cover image updated successfully:', book);
    res.status(200).json(book);
  } catch (err: unknown) {
    console.error('Error updating book cover image:', err); 
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};
