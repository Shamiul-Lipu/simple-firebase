import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="text-center container mx-auto rounded-lg bg-neutral">
            <ul className="menu menu-horizontal p-1">
                <li><Link to={'/'}>Home</Link></li>
                <li>
                    <a href="">Parent</a>
                </li>
                <li><a>Item 3</a></li>
            </ul>
        </div>
    );
};

export default Header;