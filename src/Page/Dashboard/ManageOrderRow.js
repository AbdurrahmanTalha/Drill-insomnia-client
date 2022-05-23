import React from 'react';

const ManageOrderRow = ({ order, index, setDeleteOrder }) => {

    const updatePending = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/pending/${_id}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accesstoken")}`
            }
        })
            .then(res => res.json()).then(data => console.log(data))
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <th>{order.buyer}</th>
            <td>{order.phone}</td>
            <td>{order.orderAmount}</td>
            <td>{order.buyerAddress}</td>
            <td>{order.productName}</td>
            <td>
                {
                    !order.paid ?
                    <>
                        <button className="btn">Unpaid</button>
                        <label htmlFor="deleting-confirm-2" className="btn ml-2" onClick={() => setDeleteOrder(order)} >DELETE</label>
                        </>
                        : order.pending ? <button className="btn" onClick={() => updatePending(order._id)}>Pending</button> : <button className="btn">Shipped</button>
                }
                {
                    
                }
                
            </td>
        </tr>
    );
};

export default ManageOrderRow;