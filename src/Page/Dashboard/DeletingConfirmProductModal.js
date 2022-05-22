import React from 'react';

const DeletingConfirmProductModal = ({ deletingProduct, refetch }) => {
    const { name, _id } = deletingProduct;
    const handleProductDelete = _id => {
        fetch(`http://localhost:5000/product/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }
    return (
        <div>

            <input type="checkbox" id="deleting-confirm" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to Delete {name}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label htmlFor="deleting-confirm" onClick={() => handleProductDelete(_id)} class="btn modal-button">Delete</label>
                        <label for="deleting-confirm" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletingConfirmProductModal;