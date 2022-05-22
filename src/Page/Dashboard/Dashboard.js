import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                        <li><Link to="/dashboard">My Orders</Link></li>
                        <li><Link to="/dashboard/review">Add a Reviews</Link></li>
                        <li><Link to="/dashboard/profile">My Profile</Link></li>
                        {/* {admin && <>
                            <li><Link to="/dashboard/users">All users</Link></li>
                            <li><Link to="/dashboard/doctor">Add Doctor</Link></li>
                            <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                        </>} */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;