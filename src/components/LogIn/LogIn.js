import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/google3.png'
import './LogIn.css'
const LogIn = () => {
    return (
        <div className='from-container'>
            <h2>Log In</h2>
            <form action="">
                <div className='group-container'>
                    <div className="input-group">
                        <label htmlFor="text">Email</label>
                        <input className='input-type' type="email" placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input className='input-type' type="password" placeholder='Enter your password' required />
                    </div>
                </div>
                <input className='login_submit_btn' type="submit" value="Login" />
            </form>
            <p className='sing-up-togel'>New to ema-jhon ? <Link className='new-ema' to="/SingUp">Sing Up Now</Link></p>
            <button className='google-sing-btn'>
                <img src={image} alt="" />
                <span>Continue With Google</span>
            </button>
        </div>
    );
};

export default LogIn;