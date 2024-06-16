import React, { useState } from 'react'; // Import useState dari modul React
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Masuk() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Default: Password is hidden
    const [message, setMessage] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/signin', { email, password });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Failed to sign in');
        }
    };

    const handleClick = () => {
        // Mengubah lokasi menggunakan window.location.href
        window.location.href = '/Jobdesc';
    };
    return (
        <div className="container daftar">
            <div className="popup">
                <Link to="/" className="close-btn">&times;</Link>
                <div className="popup-content">
                    <div className="popup-image">
                        <img src="/logo/login.png" alt="Gambar" />
                    </div>
                    <div className="popup-text">
                    <h3 style={{ fontWeight: 'normal', marginBottom: '30px', marginTop: '60px', marginLeft: '5px', fontSize: '40px' }}>
                            Masuk <span className="bold">ArtsyMe</span>
                        </h3>
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
                        <div className="form-grouppassword">
                            <label htmlFor="password" className="bold">Create a Password</label>
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span className="input-group-text" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} /> {/* Show Eye icon when password is visible */}
                                </span>
                            </div>
                            <small className="form-text text-muted">Min. 6 characters, numbers & letters</small>
                        </div>
                        {/* Tombol "Join" */}
                        <button
                            className="joinBtn"
                            id="joinBtn"
                            style={{ marginBottom: '10px' }}
                            onClick={handleClick}
                        >
                            Join
                        </button>

                        <div class="divider">Or</div>
                        <div className="login-options">
                            <label className="checkbox-container">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Keep me logged in
                            </label>
                            <a href="/Account" className="forgot-account">Forgot account?</a>
                        </div>

                        <button className="btn btn-block" style={{
                            width: '91%',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                        }}>
                            <img src="/logo/google warna.png" alt="Google" style={{
                                marginRight: '10px', 
                                verticalAlign: 'middle',
                                maxWidth: '24px', 
                                maxHeight: '24px' 
                            }} />
                            Continue with Google
                        </button>

                        <button className="btn btn-block" style={{
                            width: '91%',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                        }}>
                            <img src="/logo/apple.png" alt="Apple" style={{
                                marginRight: '10px', 
                                verticalAlign: 'middle',
                                maxWidth: '24px',
                                maxHeight: '24px' 
                            }} />
                            Continue with Apple
                        </button>

                        <button className="btn btn-block" style={{
                            width: '91%',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textDecoration: 'none',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                        }}>
                            <img src="/logo/facebook warna.png" alt="Facebook" style={{
                                marginRight: '10px',
                                verticalAlign: 'middle',
                                maxWidth: '24px', 
                                maxHeight: '24px' 
                            }} />
                            Continue with Facebook
                        </button>

                        <p style={{ marginTop: '20px' }}>Become a desigener <a href="/Daftar" className="text-purple">Join ArtsyMe</a></p>
                        <p>By joining this website, I confirm that I have read and agree to join website <a href="#" className="text-white text-underline">Terms of Service</a>, <a href="#" className="text-white text-underline">Privacy Policy</a>, and to receive emails and updates.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Masuk;