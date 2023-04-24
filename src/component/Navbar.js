import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { addLogout } from '../features/auth/authSlice';

const Navbar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(addLogout())
    }
    return (
        <div className='px-[150px] py-5 bg-slate-500 text-white flex justify-between'>
            <ul>
                <li><Link to="/">Redux Store</Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart </Link></li>
                <li><Link to="/user">Users </Link></li>
            </ul>
            <ul>
                <li><Link to = "/login">Login</Link></li>
                <li><button onClick={handleLogout} >Logout</button></li>
            </ul>
        </div>
    );
};

export default Navbar;