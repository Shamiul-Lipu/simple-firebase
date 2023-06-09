import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <h1 className="text-5xl font-bold">Login Please!</h1>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <form className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>

                        </form>

                        <Link to='/register'>
                            <p className="link link-primary text-center">New here, Please Register?</p>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;