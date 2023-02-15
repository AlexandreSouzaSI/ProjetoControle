/* eslint-disable no-use-before-define */
import multer from 'multer'
import { extname, resolve } from 'path'
import crypto from 'crypto'

let doc

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads', 'documentos'),
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err, null);
        doc = ( res.toString('hex') + extname(file.originalname));        
        return cb(null, doc)
        // const fileName = `${hash.toString('hex')}-${file.originalname}`
      })
      req.body.doc = doc
    },
  }),
  limits: {
    fileSize: 11 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
      const allowedMimes = [
        'application/pdf',
        'application/docx',
        'application/doc',
      ];
  
      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb("Coloque arquivos word ou pdf abaixo de 11mb", false);
      }
    }
}
