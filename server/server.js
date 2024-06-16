import express from "express"
import cors from "cors"
import userRoute from "./routes/userRoute.js"
import postJob from "./routes/postJob.js"
import fileUpload from "express-fileupload"
import UploadRoute from "./routes/UploadRoute.js"
const app = express()

app.use(cors())
app.use(express.json())
app.use(userRoute)
app.use(postJob)
app.use(fileUpload())
app.use(express.static("public"))
app.use(UploadRoute)



app.listen(5000, ()=>{console.log("server has ben runing")})