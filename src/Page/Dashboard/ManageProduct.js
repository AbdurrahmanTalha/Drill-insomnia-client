import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/tools", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products)
    return (
        <div>
            <h2>This is manage Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) =>
                                <tr>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.paid ? <button className="btn">Paid</button> : <>
                                        <button className="btn">Pay</button><button className="btn ml-2">
                                            DELETE
                                        </button>
                                    </>}</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProduct;