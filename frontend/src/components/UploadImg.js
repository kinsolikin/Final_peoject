import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { images } from "./images";
import axios from "axios";


const UploadImg = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [error, setError] = useState("");
    const [notification, setNotification] = useState("");
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        tags: "",
    });

    const navigate = useNavigate();

    const onDrop = useCallback((acceptedFiles, fileRejections) => {
        setError("");
        setNotification("");
        fileRejections.forEach(({ file, errors }) => {
            errors.forEach((err) => {
                if (err.code === "file-invalid-type") {
                    setError(`Error: ${file.name} is not a supported format.`);
                }
            });
        });

        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const image = new Image();
                image.src = event.target.result;
                image.onload = () => {
                    setUploadedFile({
                        name: file.name,
                        src: URL.createObjectURL(file),
                    });
                };
            };
            reader.readAsDataURL(file);
        });
    }, []);

    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
            }));

            };
            
            



            
            const handleUpload = () => {
                
                if (uploadedFile && formData.title && formData.description && formData.tags) {
                    setNotification("Data diri dan foto diterima!");
                    setUploadedFile(null);
                    setFormData({
                        title: "",
                        description: "",
                        tags: "",
                        });
                        setTimeout(() => {
                            setNotification("");
            }, 3000);
        } else {
            setNotification("Harap lengkapi semua field.");
            }
            };
            
            const { getRootProps, getInputProps, isDragActive } = useDropzone({
                onDrop,
                accept: {
                    'image/jpeg': ['.jpeg', '.jpg'],
                    'image/png': ['.png']
                    },
                    onDropRejected: (fileRejections) => {
                        fileRejections.forEach(({ file, errors }) => {
                    errors.forEach((error) => {
                        if (error.code === "file-invalid-type") {
                            setError(`Error: ${file.name} is not a supported format.`);
                            }
                            });
                            });
                            }
                            
                            
                            
                            
                            
                            
                            });
                            
                           
                            
                            
                            
                            
                            const [title, setTitle] = useState('');
                            const [description, setDescription] = useState('');
                            const [tags, setTags] = useState(false); // Default: Password is hidden
                            const [file, setFile] = useState('');
                            



                            
                            const simpangambar = async(e) =>{
                                e.preventDefault();
                                try {
                                        await axios.post('http://localhost:5000/saveupload',{
                                            title,
                                        description,
                                        tags,
                                        file
                                        })
                                        
                                        
                                        }catch(error){
                                            console.log(error)
                                            
                                            }
                                            }
               

                                           
               return (
                   
                   <div className="flex justify-center items-center bg-[#0F0F0F] text-white h-screen p-8">
           
            <form onSubmit={simpangambar}>

            <div className="flex w-full max-w-5xl space-x-4">
                <div className="flex flex-col space-y-6 w-1/2">
                    <div className="flex flex-col">
                        <label className="mb-2">Title</label>

                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Add Title"
                            className="p-2 rounded-md bg-[#2e2c2c] border border-gray-700"
                          
                          />
                    </div>
                    <div className="flex flex-col flex-grow">
                        <label className="mb-2">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Add Description"
                            className="p-2 rounded-md bg-[#2e2c2c] border border-gray-700 flex-grow"
                            ></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label className="mb-2">Tagged topics</label>
                        <input
                            type="text"
                            name="tags"
                            value={formData.tags}
                            onChange={handleInputChange}
                            placeholder="Search for tags"
                            className="p-2 rounded-md bg-[#2e2c2c] border border-gray-700"
                            />
                    </div>
                    <button onClick={handleUpload} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded self-end">
                        Upload
                    </button>
                    {notification && (
                        <div className="bg-red-700 border-l-4 border-red-300 text-white p-4">
                            {notification}
                        </div>
                    )}
                </div>
                <div className="flex flex-col items-center w-1/2">
                    <div
                        {...getRootProps()}
                        className={`bg-[#2e2c2c] hover:bg-gray-600 p-6 rounded-md text-center border border-dashed border-gray-600 cursor-pointer w-full flex flex-col items-center justify-center ${isDragActive ? 'bg-[#2e2c2c]' : ''}`}
                        style={{
                            height: "460px",
                            }}
                            >
                        <input {...getInputProps()} />
                        {uploadedFile ? (
                            <>
                                <img
                                    src={uploadedFile.src}
                                    alt={uploadedFile.name}
                                    className="rounded-md"
                                    style={{
                                        width: "auto",
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        }}
                                        />
                                <p className="mt-2 text-gray-400">{uploadedFile.name}</p>
                            </>
                        ) : (
                            <>
                                <img src={images.unggah} alt="unggah" className="w-8 h-8 mb-4" />
                                <p className="text-gray-300">Select File or drag and drop theme here</p>
                                <p className="text-gray-300 mt-2">We recommend using high-quality .jpg files less than 20MB in size</p>
                            </>
                        )}
                    </div>
                    {error && (
                        <p className="mt-2 text-red-500">{error}</p>
                        )}
                </div>
            </div>
        </form>
        </div>
    );
};

export default UploadImg;
