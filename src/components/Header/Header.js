import React from 'react'
import './Header.css'
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-ul'>
                <NavLink to='/' className='header-NavLink'>LOGOS</NavLink>
                <NavLink to='/home' className='header-NavLink'>Home</NavLink>
                <NavLink to='/task' className='header-NavLink'>Tasks</NavLink>
                <NavLink to='/user' className='header-NavLink'>User</NavLink>
            </div>
        </div>
    )
}

export default Header;

