import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch("http://localhost:5000/user", {
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
            <h2>This is make admin</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Make Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) =>
                            <AdminRow user={user} key={user._id} refetch={refetch} index={index}></AdminRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;