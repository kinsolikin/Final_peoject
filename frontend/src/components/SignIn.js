import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "../style.css";



function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Default: Password is hidden
    const [message, setMessage] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

  

    const saveUser = async(e) =>{
        e.preventDefault();
    try {
        await axios.post('http://localhost:5000/users',{
            email,
           password
    })

    
}catch(error){
    console.log(error)
    setMessage('Failed to sign in');
    
}
            }

  

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
                            Join <span className="bold">ArtsyMe</span>
                        </h3>
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
                                marginRight: '10px', /* jarak antara gambar dan teks */
                                verticalAlign: 'middle',
                                maxWidth: '24px', /* ukuran maksimum gambar */
                                maxHeight: '24px' /* ukuran maksimum gambar */
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

                        <div className="divider">Or</div>
                        <form onSubmit={saveUser}>
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
                                    <input type="email" className="form-control" id="email" value={email}
                                                onChange={(e)=>setEmail(e.target.value)} />
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
                            type='submit'
                                className="joinBtn"
                                id="joinBtn"
                                style={{ marginBottom: '10px' }}
                               
                            >
                                Join
                            </button>
                        </form>
                        {message && <p>{message}</p>}
                        <p>Already have an account? <Link to="/Login" className="text-purple">Log In</Link></p>
                        <p>By joining this website, I confirm that I have read and agree to join website <a href="#" className="text-white text-underline">Terms of Service</a>, <a href="#" className="text-white text-underline">Privacy Policy</a>, and to receive emails and updates.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;