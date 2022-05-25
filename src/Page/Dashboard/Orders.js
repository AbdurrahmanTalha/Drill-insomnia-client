import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderRow from './OrderRow';
import DeletingConfirmOrderModal from './DeletingConfirmOrderModal';
import {
    useLocation, useNavigate
} from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin"
const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])
    const [admin] = useAdmin(user)
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
    const location = useLocation()
    const navigate = useNavigate()
    if (admin && location.pathname === "/dashboard/myOrders") {
        navigate("/dashboard/")
    }
    console.log(location)
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