import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Register = () => {
    return (
        <div className="mb-10">
            <h2 className="text-center text-2xl mb-5">Register</h2>
            <div className="w-50 flex justify-center items-center">
                <form class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">What is your Name?</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text">What is your Email?</span>
                    </label>
                    <input type="email" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text">What is your Password?</span>
                    </label>
                    <input type="password" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text-alt">Already have a account? <Link to="/login" className="underline-offset-1 underline text-blue-500">Login!</Link></span>

                    </label>
                    <button className="btn btn-primary" type="submit">Login</button>

                    <SocialLogin></SocialLogin>
                </form>
            </div>
        </div>
    );
};

export default Register;