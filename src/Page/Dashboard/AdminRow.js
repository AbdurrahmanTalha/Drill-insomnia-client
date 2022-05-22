import React from 'react';
import { toast } from 'react-toastify';
const AdminRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const handleMakeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed To make a admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 1) {
                    toast.success(`Successfully Made ${email} a admin`)
                    refetch()
                }
            })
    }
    return (
        <tr>
            <th>{index+1}</th>
            <td>{email}</td>
            <td>{role !== "admin" && <button onClick={handleMakeAdmin} className="btn btn-xs">Make ADMIN</button>}</td>
            
        </tr>
    );
};

export default AdminRow;