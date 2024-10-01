import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="./images/logo.png" alt="Flower Logo" />
                <span>FLOWER</span>
            </div>
            <ul className="navbar-links">
                <li><a href="#">Arranjos</a></li>
                <li><a href="#">Desidratadas</a></li>
                <li><a href="#">Plantas</a></li>
                <li><a href="#">Orquídeas</a></li>
            </ul>
            <div className="navbar-search">
                <input type="text" placeholder="Buscar" />
                <button>🔍</button>
            </div>
            <div className="navbar-icons">
                <span>🔒</span>
                <span>🛒</span>
            </div>
        </nav>
    );
}

export default Navbar;
