import React from 'react';
import { NavLink } from 'react-router-dom'
import './navBar.css'
import CartIcon from './CartIcon/CartIcon';

const NavBar = () => {
    return (
        <div className='navStyle'>
            <ul className='ulStyle'>
                <NavLink to='/' activeClassName='activeLink' className='links'>
                    <li>HOME</li>
                </NavLink>
                <NavLink to='/' activeClassName='activeLink' className='links'>
                    <li>PRODUCTS</li>
                </NavLink>
                <NavLink to='/about' activeClassName='activeLink' className='links'>
                    <li>ABOUT</li>
                </NavLink>
                <NavLink to='/cart' activeClassName='activeLink' className='links'>
                    <li><CartIcon/></li>
                </NavLink>            
            </ul>
        </div>
    );
}

export default NavBar;