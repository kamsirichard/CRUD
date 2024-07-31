// src/middleware.ts
import multer from 'multer';
import path from 'path';

// Set up storage options for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure 'uploads/' directory exists
    cb(null, 'uploads/'); // Specify the directory to save the uploaded files
  },
  filename: (req, file, cb) => {
    // Generate a unique filename with the current timestamp
    cb(null, `${Date.now()}${path.extname(file.originalname)}`); // Specify the file name
  }
});

// Create an instance of Multer with the storage options
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // Validate the file type (only allow images)
    if (file.mimetype.startsWith('image/')) {
      cb(null, true); // Accept the file
    } else {
      cb(new Error('Invalid file type. Only images are allowed.')); // Reject the file with an error
    }
  },
  limits: { fileSize: 1024 * 1024 * 5 } // Limit file size to 5MB
});

export default upload;
