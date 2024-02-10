import multer from 'multer';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';

// Define the upload directory as a local path
const uploadDirectory = path.join(process.cwd(), 'public/events'); // This assumes the "uploads" directory is in the root of your project

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage });
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  try {
    upload.single('image')(req, res, (err) => {
      if (err) {
        console.error(err);
        return res.status(400).end('File upload error.');
      }
      // Get the name and path of the uploaded file
      const uploadedFileName = req.file.originalname;
      const FilePath = path.join(uploadDirectory, req.file.filename);      
      //return res.status(200).end({FilePath});
      console.log('Path:', FilePath);
      res.status(200).json({FilePath});
    });
  } catch (error) {
    console.error(error);
    return res.status(500).end('Internal server error.');
  }
};
