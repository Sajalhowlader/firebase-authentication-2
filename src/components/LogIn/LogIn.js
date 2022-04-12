import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../images/google3.png'
import auth from '../firebase.init';
import './LogIn.css'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from.pathname || '/'
    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    if (user) {
        navigate(from, { replace: true })
    }
    const submitLoginForm = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }



    return (
        <div className='from-container'>
            <h2>Log In</h2>
            <form onSubmit={submitLoginForm}>
                <div className='group-container'>
                    <div className="input-group">
                        <label htmlFor="text">Email</label>
                        <input onBlur={handleEmailBlur} className='input-type' type="email" placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} className='input-type' type="password" placeholder='Enter your password' required />
                    </div>
                </div>
                <p style={{ color: 'red' }}>{error?.message}</p>
                {
                    loading && <p>loading....</p>
                }
                <input className='login_submit_btn' type="submit" value="Login" />
            </form>
            <p className='sing-up-togel'>New to ema-jhon ? <Link className='new-ema' to="/SingUp">Create an account</Link></p>
            <button className='google-sing-btn'>
                <img src={image} alt="" />
                <span>Continue With Google</span>
            </button>
        </div>
    );
};

export default LogIn;