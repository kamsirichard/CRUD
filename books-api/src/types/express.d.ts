// src/types/express.d.ts
import * as multer from 'multer';

declare global {
  namespace Express {
    interface Request {
      file?: multer.File;
      // If you are using `files` (e.g., for multiple file uploads):
      files?: multer.File[];
    }
  }
}
