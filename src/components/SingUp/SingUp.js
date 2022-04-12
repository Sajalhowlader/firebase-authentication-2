import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SingUp.css'
import auth from '../firebase.init';
const SingUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conformPassword, setConformPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfromPasswordBlur = e => {
        setConformPassword(e.target.value)
    }


    if (user) {
        navigate('/shop')
    }

    const handleSubmitFrom = e => {
        e.preventDefault();
        if (password !== conformPassword) {
            setError('password did not match')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }




    return (
        <div className='from-container'>
            <h2>Sing Up</h2>
            <form onSubmit={handleSubmitFrom}>
                <div className='group-container'>
                    <div className="input-group">
                        <label htmlFor="text">Email</label>
                        <input onBlur={handleEmailBlur} className='input-type' type="email" placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} className='input-type' type="password" placeholder='Enter your password' required />
                    </div>
                    <div onBlur={handleConfromPasswordBlur} className="input-group">
                        <label htmlFor="conform-password">Conform Password</label>
                        <input className='input-type' type="password" placeholder='Conform your password' required />
                    </div>
                </div>
                <p style={{ color: "red" }}>{error}</p>
                <input className='login_submit_btn' type="submit" value="Sing Up" />
            </form>
            <p className='sing-up-togel'>Already have an account?
                <Link className='new-ema' to="/login">Log In</Link></p>
        </div>
    );
};

export default SingUp;