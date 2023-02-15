/* eslint-disable no-use-before-define */
import multer from 'multer'
import { extname, resolve } from 'path'
import crypto from 'crypto'

let imagens = []
let urls = []
let doc


export const dropImage = () => {
  imagens = []
  urls = []
  doc = null
}

export default {
  storage: multer.diskStorage({
    destination: resolve(__dirname, '..', '..', 'tmp', 'uploads', 'imagens_destaques'),
    filename: (req, file, cb) => {
      console.log(file)
      crypto.randomBytes(16, (err, res) => {
        if (err) return cb(err, null);
          if(file.fieldname === 'doc'){
            doc = (file.fieldname + res.toString('hex') + extname(file.originalname))
            req.body.doc = doc
            return cb(null, doc)
          } else {
            const teste = (file.fieldname + res.toString('hex') + extname(file.originalname));
            imagens.push(teste)
            for(let i = 0; i < imagens.length; i++){
              urls[i] = (process.env.URL+'/ofertasImagens/'+imagens[i])
            }
            return cb(null, teste)
          }
          // const fileName = `${hash.toString('hex')}-${file.originalname}`
        })
        console.log('imagens', imagens)
        console.log('url', urls)
        console.log('doc', doc)
        req.body.imagens = imagens
        req.body.urls = urls
      },
    }),
  limits: {
    fileSize: 5 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => {
      const allowedMimes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        'application/pdf',
        'application/docx',
        'application/doc',
      ];
  
      if (allowedMimes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb("Coloque arquivos png, jpg ou jpeg abaixo de 5mb", false);
      }
    }
}
