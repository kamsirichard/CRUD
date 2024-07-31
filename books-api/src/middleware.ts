import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
  destination: (req, file, cb) => {

    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
   
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  }
});


const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {

    if (file.mimetype.startsWith('image/')) {
      cb(null, true); 
    } else {
      cb(new Error('Invalid file type. Only images are allowed.')); 
    }
  },
  limits: { fileSize: 1024 * 1024 * 5 } 
});

export default upload;
