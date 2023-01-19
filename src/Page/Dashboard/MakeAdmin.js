import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Components/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('user', () => fetch("https://drill-insomnia-server.onrender.com/user", {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    refetch()
    return (
        <div>
            <h2 className="text-2xl font-bold pl-6">Make An Admin</h2>
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
                        users?.map((user, index) =>
                            <AdminRow user={user} key={user._id} refetch={refetch} index={index}></AdminRow>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;
