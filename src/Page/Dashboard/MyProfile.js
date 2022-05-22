import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user, loading, authError] = useAuthState(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    if (loading || updating) {
        return <Loading></Loading>;
    }
    console.log(user)
    return (
        <div className="container">
            <h2>My profile</h2>
            <form className="d-flex flex-column my-5">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Type here" value={user.displayName} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Type here" value={user.displayName} className="input input-bordered w-full max-w-xs" />
                </div>
            </form>
        </div>
    );
};

export default MyProfile;