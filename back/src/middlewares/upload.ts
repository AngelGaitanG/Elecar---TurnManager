import multer from "multer";
import path from "node:path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "src/public/images")
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

export const upload = multer({
    storage: storage
});