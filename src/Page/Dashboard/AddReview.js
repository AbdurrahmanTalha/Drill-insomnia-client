import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {

    const { register, handleSubmit, formState: { errors },reset } = useForm()
    const [user] = useAuthState(auth)
    const onSubmit = (data, event) => {
        fetch("https://shrouded-mesa-73405.herokuapp.com/rating", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast("Added a review")
                reset()
            })
        event.target.reset()
    }
    return (
        <div className="">
            <h2 className="text-2xl font-bold pl-6">Add  a review</h2>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" readOnly placeholder="text" {...register("name", { required: true })} value={user.displayName} className="input  input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Review Comment</span>
                    </label>
                    <textarea placeholder="Your Review Comment" {...register("description", { required: true })} className="input input-bordered" />
                    <p className="text-red-500">{errors.description?.type === 'required' && `Review is required`}</p>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Image</span>
                    </label>
                    <input type="url" placeholder="Your Image " {...register("img", { required: true })} className="input input-bordered" />
                    <p className="text-red-500">{errors.img?.type === 'required' && `Image is required`}</p>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="number"  {...register("review", { required: true, min: 1, max: 5 })} placeholder="review" className="input input-bordered" />
                    <p className="text-red-500">{errors.review?.type === 'min' && "Rating can not be less than 1"}</p>
                    <p className="text-red-500">{errors.review?.type === 'required' && "Rating is required"}</p>
                    <p className="text-red-500">{errors.review?.type === 'max' && `Rating can not be more than 5`}</p>
                </div>
               
               
               
                <button className="btn">Submit Review</button>
            </form>
        </div>
    );
};

export default AddReview;