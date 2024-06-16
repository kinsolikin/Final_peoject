
import Upload from "../models/UploadModel.js"
import path from "path"
export  const getUpload =async (req, res)=>{

    try{
        const response = await Upload.findAll();
        res.status(200).json(response);
    }catch(error){
        console.log(error.message);
    }
    
}

export  const getUploadById = (req, res)=>{

}

export  const saveUpload = (req, res)=>{

    if (req.files === null) return res.status(400).
    
    json({msg : "No File Upload"});

    const title = req.body.title;
    const description = req.body.description;
    const tags = req.body.tags;
    const file = req.files.file;
    const fileSize = file.data.length
    const ext = path.extname(file.name)
    const fileName = file.md5 + ext
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`
    const allowedType = ['.png','.jpg','.jpeg']

   if(!allowedType.includes(ext.toLowerCase())) return res.status (422).json({msg : "invalid Images"})
    if(fileSize > 5000000) return res.status(422).json({msg : "image must be less thenn 5 mb"})


        file.mv(`./public/images/${fileName}`,async(err)=>{
            if(err) return res.status(500).json({msg: err.message})
                try {
                    await Upload.create({title : title,tags : tags, description:description,images:fileName, url:url} )
                    res.status(201).json({msg : "sucsess upload image"})
                } catch (error) {
                    console.log
                }
        })
}

export  const updateUpload = (req, res)=>{

}

export  const deleteUpload = (req, res)=>{

}