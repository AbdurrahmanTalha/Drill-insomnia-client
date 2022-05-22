import React from 'react';

const DeletingConfirmOrderModal = ({ deleteOrder }) => {
    console.log(deleteOrder)
    const { _id, productName } = deleteOrder
    const handleDeleteOrder = _id => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }   
    return (
        <div>
            <input type="checkbox" id="deleting-confirm-2" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete {productName}</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <label htmlFor="deleting-confirm-2" onClick={() => handleDeleteOrder(_id)} class="btn modal-button">Delete</label>
                        <label for="deleting-confirm-2" class="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeletingConfirmOrderModal;