import React from 'react';

const ManageOrderRow = ({ order, index, setDeleteOrder }) => {

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
        </tr>
    );
};

export default ManageOrderRow;
