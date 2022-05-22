import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div>
            <div className="drawer drawer-mobile z-20">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    <h2 className="text-3xl font-bold text-purple-500">Dashboard</h2>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                        {admin ? <></> : <><li><Link to="/dashboard">My Orders</Link></li>
                            <li><Link to="/dashboard/review">Add a Reviews</Link></li></>}
                        <li><Link to="/dashboard/profile">My Profile</Link></li>
                        {admin && <>
                            <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
                            <li><Link to="/dashboard/allOrder">Manage all Order</Link></li>
                            <li><Link to="/dashboard/admin">Make Admin</Link></li>
                            <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;