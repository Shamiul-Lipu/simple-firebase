import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
    }

    return (
        <div className='container mx-auto'>
            <div className="card flex-shrink-0 w-full mt-4 shadow-2xl bg-base-100">
                <div className="card-body items-center ">
                    <h2 className="card-title">Register Please!</h2>

                    <form action="" onSubmit={handleSubmit} >
                        <label className="input-group input-group-md mb-2">
                            <span className='w-1/3'>Name</span>
                            <input type="text" name='name' placeholder="name" className="input input-bordered input-md w-full" required />
                        </label>
                        <label className="input-group input-group-md">
                            <span className='w-1/3'>Email</span>
                            <input onChange={(e) => setEmail(e.target.value)} type="text" name='email' placeholder="Enter email" className="input input-bordered input-md w-full" required />
                        </label>
                        <label className="input-group input-group-md py-2">
                            <span className='w-1/3'>Password</span>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="password" className="input input-bordered input-md w-full" required />
                        </label>
                        {/* <input type='submit' value='Register' className="btn btn-info" /> */}
                        <button type='submit' className='btn btn-info w-full'>Register</button>
                    </form>

                    <Link to='/login'>
                        <p className="link link-primary">Already have an account?</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;