import React from 'react'
import './login.css'
import { FaFacebook } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='login'>
            <div className='wellogin'>
                <p>Welcome to Book My Kinds!</p>
                <div>Join Book my kids to access exclusive casting opportunities, connect with industry professionals, and start your journey towards stardom. Join our community and take the first step in showcasing your talent!</div>
            </div>
            <div className='mainlogin'>
                <div className='logintit'>User Login</div>
                <div className='inputs'>
                    <div>
                        <p>Email</p>
                        <input type="text" placeholder='Email' />
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="text" placeholder='Password' />
                    </div>
                </div>
                <input type="checkbox" /> Remember Me <br />
                <div className='lgbtn'>
                    <button className='loginbtn'>Login</button>
                    <p>Forgot Password?</p>
                </div>
                <div className='otherwaylog'>
                    <p>Or</p>
                    <p><Link to="/signup" style={{ textDecoration: "underline", color: "white" }}>Signup</Link> With</p>
                    <div className='loginlogos'>
                        <FaFacebook /><FaGooglePlus /><FaLinkedin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
