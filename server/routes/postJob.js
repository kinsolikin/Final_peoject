import express from "express"

import { createUser } from "../controllers/postJobController.js"

const router = express.Router();



router.post('/postjob',createUser)


export default router;