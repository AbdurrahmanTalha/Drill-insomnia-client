import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';

const Signin = () => {
    const { register, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
    const onSubmit = async data => {
        await signInWithEmailAndPassword(data.email, data.password)
        console.log(user)
    }
    const [token] = useToken(user || gUser)
    const handleGoogleSignin = () => {
        signInWithGoogle()
    }
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    if (gUser || user) {
    }
    if (token) {
        // navigate(from, { replace: true });
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="mb-10">
            <h2 className="text-center text-2xl mb-5">Login</h2>
            <div className="w-50 flex justify-center items-center">
                <form className="form-control w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text">What is your Email?</span>
                    </label>
                    <input type="email" {...register("email")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">What is your Password?</span>
                    </label>
                    <input type="password" {...register("password")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text-alt">Don't have a account? <Link to="/register" className="underline-offset-1 underline text-blue-500">Register!</Link></span>
                    </label>
                    {error && <p className="text-red-500 text-1xl">{error?.message}</p>}
                    {gError && <p className="text-red-500 text-1xl">{gError?.message}</p>}
                    <button type="submit" className="btn btn-primary">Login</button>
                    <div className="flex flex-col w-full border-opacity-50">
                        <div className="divider">OR</div>
                        <div className="grid h-20 card rounded-box place-items-center">

                            <button className="btn btn-block" onClick={handleGoogleSignin}>CONTINUE WITH GOOGLE</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signin;