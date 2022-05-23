import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeleteOrder }) => {
    console.log(order)
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.buyer}</td>
            <td>{order.phone}</td>
            <td>{order.orderAmount}</td>
            <td>{order.buyerAddress}</td>
            <td>{order.productName}</td>
            <td>{(order.productPrice && !order.paid) ? <>
                <Link to={`/dashboard/payment/${order._id}`} className="btn btn-success">Pay</Link>
                <label htmlFor="deleting-confirm-2" className="btn bg-red-500 ml-2" onClick={() => setDeleteOrder(order)} >Cancel</label></> : <span className="text-success">TransactionId: {order?.transactionId} </span>
            }
            </td>
        </tr >
    );
};

export default OrderRow;