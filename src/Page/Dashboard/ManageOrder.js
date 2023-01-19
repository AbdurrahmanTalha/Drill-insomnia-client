import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import DeletingConfirmOrderModal from './DeletingConfirmOrderModal';
import ManageOrderRow from './ManageOrderRow';


const ManageOrder = () => {
    const [orders, setOrders] = useState([])
    const [deleteOrder, setDeleteOrder] = useState(null)


    useEffect(() => {
        fetch("https://drill-insomnia-server.onrender.com/orders", {
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
    const updatePending = (_id) => {
        console.log(_id)
        fetch(`https://drill-insomnia-server.onrender.com/pending/${_id}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json()).then(data => console.log(data))
    }

    return (
        <div className="mb-10">
            <h2 className="text-2xl font-bold pl-6">Manage Orders</h2>
            <div className="overflow-x-auto">
                <table className="md:table lg:table w-full">
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
                            orders?.map((order, index) =>
                                <tr className="overflow-x-auto">
                                    <th>{index + 1}</th>
                                    <td>{order.buyer}</td>
                                    <td>{order.phone}</td>
                                    <td>{order.orderAmount}</td>
                                    <td>{order.buyerAddress}</td>
                                    <td>{order.productName}</td>
                                    <td className='flex'>
                                        {
                                            !order.paid ?
                                                <>
                                                    <button className="text-red-500 btn-ghost">UNPAID</button>
                                                    <label htmlFor="deleting-confirm-2" className="btn ml-2 bg-red-500 border-0" onClick={() => setDeleteOrder(order)}>DELETE</label>
                                                </>
                                                : order.pending ? <button className="btn btn-primary btn-md" onClick={() => updatePending(order._id)}>PENDING...</button> : <p className="text-green-700">SHIPPED</p>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteOrder && <DeletingConfirmOrderModal deleteOrder={deleteOrder}></DeletingConfirmOrderModal>}
        </div>

    );
};

export default ManageOrder;
