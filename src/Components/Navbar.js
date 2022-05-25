import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = ({children}) => {
    const [user] = useAuthState(auth);

    const handleSignOut = async () => {
        await signOut(auth)
        localStorage.removeItem("accessToken")
    }
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        {
            user && <>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </>
        }
        {
            user ? <>
                <li><button onClick={handleSignOut} className="btn text-white">Logout</button></li>
                <div className="btn ml-2">{user?.displayName}</div>
            </> : <li><Link to="/login" className="btn text-white">Login</Link></li>
        }
    </>
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* <!-- Navbar --> */}
                <div className="w-full navbar lg:px-10">
                    <div className="flex-none z-50 lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 text-3xl">Drill Insomnia</div>
                    <div className="flex-none z-index-50 lg:hidden">
                        <label htmlFor="sidebar-dashboard" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal gap-x-2">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {menuItems}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;