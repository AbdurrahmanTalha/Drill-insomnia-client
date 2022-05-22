import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        const getOrders = () => {
            const email = user.email;
            const url = `http://localhost:5000/myOrder?email=${email}`
            fetch(url, {
                method: "GET",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
        getOrders();
    }, [orders])
    // console.log(orders)
    const handleDeleteOrder = _id => {
        console.log(_id)
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }   
    return (
        <div>
            <h2>This is orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Amount Bought</th>
                            <th>Address</th>
                            <th>Product</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.buyer}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.buyerAddress}</td>
                                    <td>{order.productName}</td>
                                    <td>{order.paid ? <button className="btn">Paid</button> : <>
                                        <button className="btn" >Pay</button><button onClick={() => handleDeleteOrder(order._id)} className="btn ml-2">
                                            Cancel
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

export default Orders;