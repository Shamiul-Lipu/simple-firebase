import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }

    return (
        <div className='container mx-auto'>
            <div className="card w-full mt-6 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Register Please!</h2>

                    <form action="" onSubmit={handleSubmit} >
                        <label className="input-group input-group-md">
                            <span className='w-1/3'>Email</span>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" name='email' placeholder="Enter email" className="input input-bordered input-md w-full" />
                        </label>
                        <label className="input-group input-group-md py-2">
                            <span className='w-1/3'>Password</span>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="password" className="input input-bordered input-md w-full" />
                        </label>
                        {/* <input type='submit' value='Register' className="btn btn-info" /> */}
                        <button type='submit' className='btn btn-info'>Register</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;