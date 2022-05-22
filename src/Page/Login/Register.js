import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from "../../firebase.init.js"
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading';
import useToken from '../../Hooks/useToken.js';
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth)
    const [token] = useToken(user || gUser)
    const [updateProfile, updating, uError] = useUpdateProfile(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const onSubmit = async data => {
        createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })
        console.log(user)
    }
    const handleGoogleSignin = () => {
        signInWithGoogle()
    }
    if (token) {

    }
    if (updating || loading || gLoading) {
        return <Loading></Loading>
    }
    let from = location.state?.from?.pathname || "/";
    if (gUser || user) {
        navigate(from, { replace: true });
    }
    return (
        <div className="mb-10">
            <h2 className="text-center text-2xl mb-5">Register</h2>
            <div className="w-50 flex justify-center items-center">
                <form className="form-control w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text">What is your Name?</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"{...register("name")} />
                    <label className="label">
                        <span className="label-text">What is your Email?</span>
                    </label>
                    <input type="email" {...register("email")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text">What is your Password?</span>
                    </label>
                    <input type="password" {...register("password")} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text-alt">Already have a account? <Link to="/login" className="underline-offset-1 underline text-blue-500">Login!</Link></span>
                    </label>
                    {error && <p className="text-red-500 text-1xl">{error?.message}</p>}
                    {uError && <p className="text-red-500 text-1xl">{uError?.message}</p>}
                    {gError && <p className="text-red-500 text-1xl">{gError?.message}</p>}
                    <button className="btn btn-primary" type="submit">Register</button>
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

export default Register;