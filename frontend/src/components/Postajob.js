import React, { useState } from 'react'; // Import useState dari modul React
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function Postajob() {

    const[name,setName] = useState("");
    const[title,setTitle] = useState("");
    const[type,setType] = useState("");
    const[creativefields,setCreative] = useState("");
    const[location,setLocation] = useState("");
    const[city,setCity] = useState("");
    const[employmentCountry,setEmployment] = useState("");
    const[shortDesxription,setShortdiscription] = useState("");
    const[fulldescriotion,setFullDescription] = useState("");
    const navigate = useNavigate()

    const saveJob = async(e) =>{
        e.preventDefault();
    try {
        await axios.post('http://localhost:5000/postjob',{
            name,
            title,
           type,
           creativefields,
           location,
           city,
           employmentCountry,
           shortDesxription,
           fulldescriotion
    })

    alert("data berhasil di POst")
   
}catch(error){
    console.log(error)
    
}
            }

    return (
        <div className="containerpost">
            <p><strong>Post As</strong></p>

            <form onSubmit={saveJob}>

            <div className="profile-sectionpost">
                <img src="/logopersonal/personal5.png" alt="Profile" />
                <input type="text" placeholder="name" value={name}
                            onChange={(e)=>setName(e.target.value)} />
            </div>
            <p>Job Details</p>
            <div className="profile-sectionpost2">
                <label htmlFor="selectInput">Title</label>
                <input type="text" placeholder="title" value={title}
                            onChange={(e)=>setTitle(e.target.value)} />
                <p className="p2">Job title is required *</p>
            </div>
            <div className="profile-sectionpost3">
                <label htmlFor="selectInput">Type</label>
                <div>
                    <select id="selectInput" style={{ direction: 'ltr' }} value={type}
                            onChange={(e)=>setType(e.target.value)} >
                        <option value="Freelancer">Freelance</option>
                        <option value="Magang">Magang</option>
                        <option value="seller">seller</option>

                    </select>
                </div>
            </div><br />
            <div className="profile-sectionpost3">
                <label htmlFor="selectInput">Creative Fields (Up to 3)</label>
                <div>
                    <select id="selectInput" style={{ direction: 'ltr' }}value={creativefields}
                            onChange={(e)=>setCreative(e.target.value)}>
                        <option value="Select Creativate Fields">Select Creativate Fields</option>
                        <option value="Desaigner">Desaigner</option>
                        <option value="ilustrator">ilustrator</option>
                    </select>
                    <p className="p2">Please choose at least one Creative field</p>
                </div>
            </div>

            <div className="profile-sectionpost4">
                <label htmlFor="selectInput">Location</label>
                <div>
                    <select id="selectInput" style={{ direction: 'ltr' }}value={location}
                            onChange={(e)=>setLocation(e.target.value)}>
                        <option value="">Select Country</option>
                        <option value="jakarta">jakarta</option>
                        <option value="medan">medan</option>
                    </select>
                </div>
                    <input type='text' className='text-input-containerpostajob' placeholder='city'value={city}
                            onChange={(e)=>setCity(e.target.value)}></input>
            </div>

            <div className="profile-sectionpost3">
                <label htmlFor="selectInput">Employment Type</label>
                <div>
                    <select id="selectInput" style={{ direction: 'ltr' }}value={employmentCountry}
                            onChange={(e)=>setEmployment(e.target.value)}>
                        <option value="option1">On Site</option>
                        <option value="wonogiri">wonogiri</option>
                        <option value="sukoharjo">Sukoharjo</option>
                    </select>
                </div>
            </div> <br />
            <div className="profile-sectionpost2">
                <label htmlFor="selectInput">Short Description</label>
                <input type="text" placeholder="" value={shortDesxription}
                            onChange={(e)=>setShortdiscription(e.target.value)}/>
            </div> <br />

            <div className="profile-sectionpost5">
                <label htmlFor="fullDescription">Full Description</label>
                <textarea type = "input" id="fullDescription" placeholder=""value={fulldescriotion}
                            onChange={(e)=>setFullDescription(e.target.value)}/>
            </div>

            <div className="ceklis-options">
                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    This post is adverting a creative job opportunity, and i understand that off-topic posts will
                    revoved For more, please see the Help Center article Best Practices When Posting a Job
                </label>
            </div>

            <div className="button-postjob">
                <button className="post-button" type='submit'>Post Job</button>
            </div>
                            </form>
            </div>
            );
}

            export default Postajob;
