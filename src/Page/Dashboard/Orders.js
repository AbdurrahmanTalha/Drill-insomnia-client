import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderRow from './OrderRow';
import DeletingConfirmOrderModal from './DeletingConfirmOrderModal';

const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    const [deleteOrder, setDeleteOrder] = useState(null)
    useEffect(() => {
        const getOrders = () => {
            const email = user.email;
            const url = `https://shrouded-mesa-73405.herokuapp.com/myOrder?email=${email}`
            fetch(url, {
                method: "GET",
                headers: { authorization: `Bearer ${localStorage.getItem("accessToken")}` }
            })
                .then(res => res.json())
                .then(data => setOrders(data))
        }
        getOrders();
    }, [orders])
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
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <OrderRow order={order} key={order._id} setDeleteOrder={setDeleteOrder} index={index}></OrderRow>)
                        }

                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeletingConfirmOrderModal deleteOrder={deleteOrder}></DeletingConfirmOrderModal>}
        </div>
    );
};

export default Orders;