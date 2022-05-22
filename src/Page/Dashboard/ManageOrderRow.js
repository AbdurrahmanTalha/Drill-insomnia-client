import React from 'react';

const ManageOrderRow = ({ order, index, setDeleteOrder }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <th>{order.buyer}</th>
            <td>{order.phone}</td>
            <td>{order.orderAmount}</td>
            <td>{order.buyerAddress}</td>
            <td>{order.productName}</td>
            <td>
                {order.paid ? <button className="btn">Pending</button> :
                    <>
                        <button className="btn">Unpaid</button>
                        <label htmlFor="deleting-confirm-2" className="btn ml-2" onClick={() => setDeleteOrder(order)} >DELETE</label>
                    </>}
            </td>
        </tr>
    );
};

export default ManageOrderRow;