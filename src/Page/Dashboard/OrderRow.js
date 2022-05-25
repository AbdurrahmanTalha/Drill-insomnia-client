import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeleteOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.buyer}</td>
            <td>{order.phone}</td>
            <td>{order.orderAmount}</td>
            <td>{order.buyerAddress}</td>
            <td>{order.productName}</td>
            <td>{(order.productPrice && !order.paid) ? <>
                <Link to={`/dashboard/payment/${order._id}`} className="btn btn-success btn-md">Pay</Link>
                <label htmlFor="deleting-confirm-2" className="btn btn-md bg-red-500 ml-2 border-0" onClick={() => setDeleteOrder(order)} >Cancel</label></> : <span className="text-success">TransactionId: {order?.transactionId} </span>
            }
            </td>
            <td>{(order.paid === true && order.pending === false) ? <p className="text-green-500">DELIVERED</p> : (order.paid === false) ? <p className='text-red-500'>UNPAID</p>:(order.paid===true && order.pending === true) && <p className='text-green-500'>PENDING</p>}</td>
        </tr >
    );
};

export default OrderRow;