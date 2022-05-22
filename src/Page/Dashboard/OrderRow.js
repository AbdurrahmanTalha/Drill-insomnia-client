import React from 'react';

const OrderRow = ({ order, index, setDeleteOrder}) => {
    return (
        <tr key={order._id}>
            <th>{index + 1}</th>
            <td>{order.buyer}</td>
            <td>{order.phone}</td>
            <td>{order.orderAmount}</td>
            <td>{order.buyerAddress}</td>
            <td>{order.productName}</td>
            <td>{order.paid ? <button className="btn">Paid</button> : <>
                <button className="btn">Pay</button>
                <label for="deleting-confirm-2" class="btn ml-2" onClick={() => setDeleteOrder(order)} >Cancle</label>
               
            </>}</td>
        </tr>
    );
};

export default OrderRow;