import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function Faccount() {
    const handleClick = () => {
        // Mengubah lokasi menggunakan window.location.href
        window.location.href = '/Code';
    };
    return (
        <div className="container daftar">
            <div className="popup">
                <div className="popup-content">
                    <div className="popup-image">
                        <img src="/logo/login.png" alt="Gambar" />
                    </div>
                    <div className="popup-text">
                        <h3 class="right-align"><span class="bold">Forgot account</span></h3>
                        <p class="email-text">Enter the email address associated with your account?</p>
                            <div className="form-group">
                                <label htmlFor="email" className="bold">
                                    Email
                                </label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text icon-container">
                                            <FontAwesomeIcon icon={faUser} />
                                        </span>
                                    </div>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                            </div>
                        {/* Tombol "Join" */}
                        <button className="joinBtn" id="joinBtn" onClick={handleClick} >Send</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Faccount;