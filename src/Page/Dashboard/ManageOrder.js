import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import DeletingConfirmOrderModal from './DeletingConfirmOrderModal';
import ManageOrderRow from './ManageOrderRow';


const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    const [deleteOrder, setDeleteOrder] = useState(null)


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
    }, [orders])


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
                                <ManageOrderRow key={order._id} order={order} setDeleteOrder={setDeleteOrder} index={index}></ManageOrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeletingConfirmOrderModal deleteOrder={deleteOrder}></DeletingConfirmOrderModal>}
        </div>
    );
};

export default ManageOrder;