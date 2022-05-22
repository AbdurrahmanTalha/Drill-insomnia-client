import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddReview = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [user, loading] = useAuthState(auth)
    const onSubmit = (data, event) => {
        fetch("http://localhost:5000/rating", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        event.target.reset()
    }
    return (
        <div className="">
            <h2 className="text-2xl font-bold">Added a review</h2>
            <form class="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Your Name</span>
                    </label>
                    <input type="text" readOnly placeholder="text" {...register("name", { required: true })} value={user.displayName} class="input  input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Your Review Comment</span>
                    </label>
                    <textarea placeholder="Your Review Comment" {...register("description", { required: true })} class="input input-bordered" />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Your Image</span>
                    </label>
                    <input type="text" placeholder="Your Image " {...register("img", { required: true })} class="input input-bordered" />
                </div>

                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Review Number</span>
                    </label>
                    <input type="number"  {...register("review", { required: true, min: 1, max: 5 })} placeholder="review" class="input input-bordered" />
                </div>
                <p className="text-red-500">{errors.review?.type === 'min' && "You have to atleast rate 1"}</p>
                <p className="text-red-500">{errors.review?.type === 'max' && `You can't add a review more than five`}</p>
                <button className="btn">Submit Review</button>
            </form>
        </div>
    );
};

export default AddReview;