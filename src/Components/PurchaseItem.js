import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';

import { toast } from 'react-toastify';
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
    const onSubmit = data => {
        if (drill.quantity < 1) {
            toast.error("Out of Stock")
        } else {
            const purchase = {
                buyer: data.buyer,
                buyerEmail: data.buyerEmail,
                phone: data.phone,
                buyerAddress: data.buyerAddress,
                orderAmount: data.orderAmount,
                paid: false,
                productId: drill._id,
                productName: drill.name,
                productPrice: Number(drill.price * data.orderAmount)
            }
            fetch("http://localhost:5000/purchase", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify(purchase)
            })
                .then(res => res.json())
                .then(tool => {
                    if (tool.success) {
                        const quantity = drill.quantity - data.orderAmount;
                        const updatedQuantity = { quantity };
                        const url = `http://localhost:5000/drill/${drill._id}`;
                        fetch(url, {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(updatedQuantity)
                        })
                            .then(res => res.json())
                            .then(data => {
                                toast.success(`Successfully Bought ${drill?.name}`)
                            })
                    }
                })
        }

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <img src={drill?.img} alt="" />
                        <h1 className="text-5xl font-bold">Purchase now!</h1>
                        <h2 className="text-3xl font bold">Drill Name: {drill?.name}</h2>
                        <p className=" text-1xl">Price: {drill?.price}</p>
                        <p className=" text-1xl">Available Quantity: {drill?.quantity < 1 ? "Out of Stock" : drill?.quantity}</p>
                        <p className="text-1xl">{drill?.desc}</p>

                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" readOnly placeholder="text" {...register("buyer", { required: true })} value={user.displayName} className="input  input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" readOnly {...register("buyerEmail", { required: true })} placeholder="Email" value={user.email} className="input  input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="phone" placeholder="Phone"{...register("phone", { required: true })} className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Address</span>
                            </label>
                            <input type="text"  {...register("buyerAddress", { required: true })} placeholder="Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order amount</span>
                            </label>
                            <input type="number"  {...register("orderAmount", { required: true, min: 1, max: drill?.quantity })} placeholder="Quantity" className="input input-bordered" />
                        </div>
                        {/* <p className="text-red-500">{error}</p> */}
                        <p className="text-red-500">{errors.orderAmount?.type === 'min' && "You have to at least buy 1"}</p>
                        <p className="text-red-500">{errors.orderAmount?.type === 'max' && `You can't buy more than ${drill.quantity}`}</p>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Purchase</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PurchaseItem;