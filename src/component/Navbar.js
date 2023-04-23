import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { useSelector } from 'react-redux';

const Navbar = () => {

    return (
        <div className='px-[150px] py-5 bg-slate-500 text-white'>
            <ul>
                <li><Link to="/">Redux Store</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart </Link></li>
            </ul>
        </div>
    );
};

export default Navbar;