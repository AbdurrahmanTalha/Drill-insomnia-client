import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ children }) => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">
                <div className="w-full navbar">
                    <div className="flex-none lg:hidden">
                        <label for="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <Link to="/" className="flex-1 px-2 mx-2 cursor-pointer">Drill Insomnia</Link>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/22"> Item 2</Link></li>
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label for="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Sidebar Item 2</Link></li>
                </ul>

            </div>

        </div>
    );
};

export default Navbar;