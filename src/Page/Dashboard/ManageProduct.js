import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import ProductItem from './ProductItem';
import DeletingConfirmModal from "./DeletingConfirmProductModal"
const ManageProduct = () => {
    const [deletingProduct, setDeletingProduct] = useState(null)
    const { data: products, isLoading, refetch } = useQuery('product', () => fetch("http://localhost:5000/tools", {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>This is manage Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => <ProductItem key={product._id} product={product} setDeletingProduct={setDeletingProduct}></ProductItem>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingProduct && <DeletingConfirmModal deletingProduct={deletingProduct} refetch={refetch}></DeletingConfirmModal>}
        </div>
    );
};

export default ManageProduct;