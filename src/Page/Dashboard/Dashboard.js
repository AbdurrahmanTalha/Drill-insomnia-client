import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)

    return (
        <div className="drawer drawer-mobile ">
            <input id="sidebar-dashboard" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className="text-2xl font-bold text-purple-400 p-5">Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="sidebar-dashboard" className="drawer-overlay"></label>
                <ul className="menu p-4 z-50 overflow-y-auto w-64 bg-base-200 gap-y-2 text-base-content">
                    {!admin && <>
                        <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                        <li><Link to="/dashboard/review">Add a Reviews</Link></li>
                    </>}
                    <li><Link to="/dashboard/">My Profile</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
                        <li><Link to="/dashboard/allOrder">Manage all orders</Link></li>
                        <li><Link to="/dashboard/admin">Make Admin</Link></li>
                        <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                    </>}
                </ul>
            </div>
        </div >
    );
};

export default Dashboard;