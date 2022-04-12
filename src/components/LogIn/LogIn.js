import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../images/google3.png'
import auth from '../firebase.init';
import './LogIn.css'

const LogIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handldeEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    if (user) {
        navigate('/shop')
    }
    const submitLoginFrorm = e => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }



    return (
        <div className='from-container'>
            <h2>Log In</h2>
            <form onSubmit={submitLoginFrorm}>
                <div className='group-container'>
                    <div className="input-group">
                        <label htmlFor="text">Email</label>
                        <input onBlur={handldeEmailBlur} className='input-type' type="email" placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} className='input-type' type="password" placeholder='Enter your password' required />
                    </div>
                </div>
                <p style={{ color: 'red' }}>{error?.massege}</p>
                {
                    loading && <p>loading....</p>
                }
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