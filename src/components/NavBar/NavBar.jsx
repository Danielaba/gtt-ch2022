import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

function NavBar() {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark'>
                <div className='container'>
                    <Link to={"/"}  className='nav-t' >Rick and Morty</Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;