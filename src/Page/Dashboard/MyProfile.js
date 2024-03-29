import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const MyProfile = () => {

    const [user, loading] = useAuthState(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { data: usersDB, isLoading, refetch } = useQuery('users', () => fetch(`https://drill-insomnia-server.onrender.com/user/${user.email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (loading || updating || isLoading) {
        return <Loading></Loading>;
    }
    // console.log(usersDB)
    const onSubmit = async data => {
        await updateProfile({ displayName: data.name })
        const changes = {
            education: data.education,
            linkedIn: data.linkedIn,
            location: data.location,
            phoneNumber: data.phoneNumber
        }
        fetch(`https://drill-insomnia-server.onrender.com/myProfile/${user.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(changes)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 1 || data.modifiedCount === 1) {
                    toast.success("Successfully Edited My Profile Might need to reload to check changes")
                    refetch()
                }
            })
        console.log(data)
    }
    // console.log(user)
    return (
        <div className="container">
            <div>
                <h2 className="text-2xl font-bold pl-6">My Profile</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user.displayName} {...register("name")} className="input input-bordered w-full max-w-xs" />
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
                    <div className="form-control w-full max-w-xs mb-5">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="text" defaultValue={usersDB.location}  {...register("location")} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <button className="btn w-7/12" type="submit">Save</button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
