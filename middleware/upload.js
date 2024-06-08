import multer from 'multer'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads') // กำหนดโฟลเดอร์สำหรับเก็บไฟล์
  },
  filename: function (req, file, cb) {
    cb(null, 'PAID-' + Date.now() + '-' + file.originalname)
  },
})

const upload = multer({ storage: storage })

export default upload
