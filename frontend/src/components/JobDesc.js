import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

function Jobdesc() {
    const [saved, setSaved] = useState(false); // State untuk menyimpan status tombol "Save a Job"

    // Fungsi untuk mengubah status tombol "Save a Job" saat diklik
    const toggleSaved = () => {
        setSaved(!saved);
    };

    return (
        <div className="container-job">
            <div className="circle-imagejob-container">
                <img
                    src="/job/stucel.png"
                    alt="Custom"
                    className="circle-imagejob"
                />
            </div>
            <div className="text-below-circle">
                3D Modeling and Animator
            </div>
            <div className="text-below-circle2">
                <span className="stucel-text">stucel</span>
                <span className="separator"> | </span>
                <span className="anyware-text">anyware</span>
            </div>
            <div className="button-containerjob">
                <button className="apply-button">
                    <Link to="/postjob" className="apply-link">Apply on website</Link>
                </button>
                <button className="save-button" onClick={toggleSaved}>
                    <FaStar className={saved ? "star-icon active" : "star-icon"} /> Save Job
                </button>
            </div>
            <div className="descjob">
                <div className="text-input-containerjob">
                    <p className="custom-strong">HI,<br />
                        <span className="not-bold">We are Stucel, creators of fun toys for kids including action figures, race-tracks, and more.<br />
                            <br />
                            We'd love to team up with a talented person like you to help us tell the story of our toys.</span>
                    </p>
                    <p className="custom-strong">Our needs include enhancing the quality and resolution of a toy-set photograph and recreating it as a high
                        fidelity drawing.</p>
                    <p className="custom-strong">Here's a title about us:<br />
                        <span className="not-bold">Living at the cross-section of fun play and education learning, we create toys that combine STEM, storytelling,
                            hands-on fun, and other opportunities for children to learn as they play.
                            From action figures to building toys, racetrack sets to party games, and everything in between, jitteryGit has
                            quickly become a leader in playtime fun. jitteryGit toys are loved and trusted by millions of parents and kids!
                            We would love to meet with you to talk about how you can help.
                        </span>
                    </p>
                    <p className="custom-strong2">Stucel.com<br />
                        <span className="not-bold">Please feel free to reach out at any time,<br />
                            Thank you,<br />
                            Ash<br />
                        </span>
                    </p>
                </div>
                <div className="text-input-containerjob2">
                    <p className="custom-strong">JOB TYPE<br />
                        <span className="not-bold">Freelance</span>
                    </p>
                    <p className="custom-strong">JOB LOCATION<br />
                        <span className="not-bold">anyware</span>
                    </p>
                    <p className="custom-strong">ON SITE REQUIRED<br />
                        <span className="not-bold">Not required - Remote okay</span>
                    </p>
                    <p className="custom-strong">JOB POSTED<br />
                        <span className="not-bold">May 15th, 2024</span>
                    </p>    
                </div>
            </div>
            <div className="button-containerjob2">
                <button className="apply-button">
                    <Link to="/postjob" className="apply-link" style={{ textDecoration: 'none' }}>Apply on website</Link>
                </button>
                <button className="save-button" onClick={toggleSaved}>
                    <FaStar className={saved ? "star-icon active" : "star-icon"} /> Save Job
                </button>
            </div>
        </div>
    );
}

export default Jobdesc;
