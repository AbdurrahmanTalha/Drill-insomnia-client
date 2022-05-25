import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const onSubmit = (data) => {
        fetch(`https://shrouded-mesa-73405.herokuapp.com/product`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                reset()
                toast.success("Added a product")
            })
    }
    return (
        <div>
            <h2 className="text-2xl font-bold pl-6">Add a Product</h2>
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Drill Name</span>
                    </label>
                    <input type="text" placeholder="Drill Name" {...register("name", { required: true })} className="input  input-bordered" />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Drill Price</span>
                    </label>
                    <input type="number" placeholder="Price" {...register("price", { required: true })} className="input  input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Drill description</span>
                    </label>
                    <textarea placeholder="Description" {...register("desc", { required: true })} className="input  input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Drill Quantity</span>
                    </label>
                    <input type="number" placeholder="Quantity" {...register("quantity", { required: true, min: 1 })} className="input  input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Drill Image</span>
                    </label>
                    <input placeholder="Image Link" {...register("img", { required: true })} className="input  input-bordered" />
                </div>

                <button className="btn">Submit Review</button>
            </form>
        </div>
    );
};

export default AddProduct;