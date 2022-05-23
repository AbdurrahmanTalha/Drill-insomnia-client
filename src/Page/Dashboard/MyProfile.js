import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';

const MyProfile = () => {

    const [user, loading] = useAuthState(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: usersDB, isLoading, refetch } = useQuery('users', () => fetch(`http://localhost:5000/user/${user.email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (loading || updating || isLoading) {
        return <Loading></Loading>;
    }
    // console.log(usersDB)
    const onSubmit = data => {
        const changes = {
            education: data.education,
            linkedIn: data.linkedIn,
            location: data.location,
            phoneNumber: data.phoneNumber
        }
        fetch(`http://localhost:5000/myProfile/${user.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(changes)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        console.log(data)
    }
    // console.log(user)
    return (
        <div className="container">
            <h2>My profile</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={user.displayName} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input type="text" defaultValue={usersDB.education}  {...register("education")} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Phone Number</span>
                    </label>
                    <input type="text" defaultValue={usersDB.phoneNumber}  {...register("phoneNumber")} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Linked In</span>
                    </label>
                    <input type="text" defaultValue={usersDB.linkedIn}  {...register("linkedIn")} className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text" defaultValue={usersDB.location}  {...register("location")} className="input input-bordered w-full max-w-xs" />
                </div>

                <button className="btn" type="submit">Save</button>
            </form>
        </div>
    );
};

export default MyProfile;