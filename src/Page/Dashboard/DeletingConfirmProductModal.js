import React from 'react';

const DeletingConfirmProductModal = ({ deletingProduct, refetch }) => {
    const { name, _id } = deletingProduct;
    const handleProductDelete = _id => {
        fetch(`https://shrouded-mesa-73405.herokuapp.com/product/${_id}`, {
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

            <input type="checkbox" id="deleting-confirm" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to Delete {name}</h3>
                    <p className="py-4" > You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    < div className="modal-action" >
                        <label htmlFor="deleting-confirm" onClick={() => handleProductDelete(_id)} className="btn modal-button bg-red-500">Delete</label>
                        <label htmlFor="deleting-confirm" className="btn">Cancel</label>
                    </div >
                </div >
            </div >
        </div >
    );
};

export default DeletingConfirmProductModal;