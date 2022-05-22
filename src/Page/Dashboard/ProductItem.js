import React from 'react';

const ProductItem = ({ product, setDeletingProduct }) => {

    return (
        <tr>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>
                <label htmlFor="deleting-confirm" onClick={() => setDeletingProduct(product)} className="btn modal-button">Delete</label>
            </td>
        </tr>
    );
};

export default ProductItem;