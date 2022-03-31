import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink activeClassName="active" to="/shop">Shop</NavLink>
                <NavLink activeClassName="active" to="/orders">Orders</NavLink>
                <NavLink activeClassName="active" to="/inventory">Inventory</NavLink>
                <NavLink activeClassName="active" to="/about">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;