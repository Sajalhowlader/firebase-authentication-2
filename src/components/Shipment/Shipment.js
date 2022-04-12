import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    // const navigate = useNavigate()

    const handleNameBlur = e => {
        setName(e.target.value)
    }
    const handleAddress = e => {
        setAddress(e.target.value)
    }

    const handleSubmitFrom = e => {
        e.preventDefault();
        const shipping = { name, email, address, }
        console.log(shipping);
    }




    return (
        <div className='from-container'>
            <h2>Shipment </h2>
            <form onSubmit={handleSubmitFrom}>
                <div className='group-container'>
                    <div className="input-group">
                        <label htmlFor="text">Name</label>
                        <input onBlur={handleNameBlur} className='input-type' type="text" placeholder='Enter your name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="text">Email</label>
                        <input className='input-type' type="email" placeholder='Enter your email' value={user?.email} readOnly required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <textarea onBlur={handleAddress} className='input-type' type="" placeholder='Enter your Address' required />
                    </div>

                </div>
                <input className='login_submit_btn' type="submit" value="Add Shipment" />
            </form>

        </div>
    );

};

export default Shipment;