import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';


const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/orders", {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])

    return (
        <div>
            <h2>This is Manage Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Amount Buyed</th>
                            <th>Address</th>
                            <th>Product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{order.buyer}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.buyerAddress}</td>
                                    <td>{order.productName}</td>
                                    <td>{order.paid ? <button className="btn">Paid</button> : <>
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

export default ManageOrder;