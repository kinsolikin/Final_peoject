import React, { useState } from 'react'; // Import useState dari modul React

function Vercode() {
    const handleClick = () => {
        // Mengubah lokasi menggunakan window.location.href
        window.location.href = '/Jobdesc';
    };
    return (
        <div className="container daftar">
            <div className="popup">
                <div className="popup-content">
                    <div className="popup-image">
                        <img src="/logo/login.png" alt="Gambar" />
                    </div>
                    <div className="popup-text">
                        <h3 class="right-align2"><span class="bold">Enter the code</span></h3>
                        <p class="email-text">We have sent a verification code to your email</p>
                        <div class="form-group">
                            <label for="code" class="bold">Enter your code</label>
                            <input type="text" class="form-control" id="code" />
                        </div>
                        <p class="custom-paragraph">Heaven't got the code yet? <a href="#" class="text-purple2">resend code</a><span class="detik">
                            30 seconds</span></p>
                       {/* Tombol "Join" */}
                       <button className="joinBtn" id="joinBtn" onClick={handleClick} >Send</button> 
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Vercode;