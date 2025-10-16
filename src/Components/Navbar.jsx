import React from "react";

const Navbar = () => (
    <nav className='flex items-center justify-between'>
        <img src="/assets/logo.png" alt="logo" className="h-auto max-w-[60px]"/>
        <ul className="flex items-center gap-7.5">
            <li className="hover:translate-y-[-12px]"><a href="#" className="text-white text-2xl">Home</a></li>
            <li className="hover:translate-y-[-12px]"><a href="#" className="text-white text-2xl">Products</a></li>
            <li className="hover:translate-y-[-12px]"><a href="#" className="text-white text-2xl">News</a></li>
            <li className="hover:translate-y-[-12px]"><a href="#" className="text-white text-2xl">About</a></li>
            <li className="hover:translate-y-[-12px]"><a href="#" className="text-white text-2xl">Contact</a></li>
        </ul>
    </nav>
);

export default Navbar;
