import express from "express"
import { 
getUpload,
saveUpload

} from "../controllers/UploadController.js"

const router = express.Router();



router.get('/getupload',getUpload)
router.post('/saveupload',saveUpload)

export default router;