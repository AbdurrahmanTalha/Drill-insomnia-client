import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';

const PurchaseItem = () => {
    const { drillId } = useParams()
    const [drill, setDrill] = useState();
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [error, setError] = useState("")

    useEffect(() => {
        const url = `http://localhost:5000/item/${drillId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDrill(data)
            });

    }, [drill]);
    // console.log(drill)
    const onSubmit = data => {
        
    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Purchase now!</h1>
                    <h2 className="text-3xl font bold">Drill Name: {drill?.name}</h2>
                    <p class=" text-1xl">Price: {drill?.price}</p>
                    <p class=" text-1xl">Available Quantity: {drill?.quantity}</p>
                    <p class="text-1xl">{drill?.desc}</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form class="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" readOnly placeholder="text" {...register("buyer", { required: true })} value={user.displayName} class="input  input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" readOnly {...register("buyerEmail", { required: true })} placeholder="Email" value={user.email} class="input  input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Phone</span>
                            </label>
                            <input type="phone" placeholder="Phone"{...register("phone", { required: true })} class="input input-bordered" />
                        </div>

                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Address</span>
                            </label>
                            <input type="text"  {...register("buyerAddress", { required: true })} placeholder="Address" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Order amount</span>
                            </label>
                            <input type="number"  {...register("orderAmount", { required: true, min: 1, max: drill?.quantity })} placeholder="Quantity" class="input input-bordered" />
                        </div>
                        {/* <p className="text-red-500">{error}</p> */}
                        <p className="text-red-500">{errors.orderAmount?.type === 'min' && "You have to at least buy 1"}</p>
                        <p className="text-red-500">{errors.orderAmount?.type === 'max' && `You can't buy more than ${drill.quantity}`}</p>
                        

                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Purchase</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseItem;