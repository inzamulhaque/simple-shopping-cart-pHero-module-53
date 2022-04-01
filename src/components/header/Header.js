import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink activeclassname="active" to="/shop">Shop</NavLink>
                <NavLink activeclassname="active" to="/orders">Orders</NavLink>
                <NavLink activeclassname="active" to="/inventory">Inventory</NavLink>
                <NavLink activeclassname="active" to="/about">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;