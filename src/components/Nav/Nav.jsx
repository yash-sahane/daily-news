import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
        <nav className="navbar is-primary is-fixed-top">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <h1 className="navbar-logo-text has-text-white">DailyNews</h1>
                </Link>
            </div>
            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item has-text-white">
                        General
                    </Link>
                    <Link to="/entertainment" className="navbar-item has-text-white">
                        Entertainment
                    </Link>
                    <Link to="/science" className="navbar-item has-text-white">
                        Science
                    </Link>
                    <Link to="/health" className="navbar-item has-text-white">
                        Health
                    </Link>
                    <Link to="/sports" className="navbar-item has-text-white">
                        Sports
                    </Link>
                    <Link to="/technology" className="navbar-item has-text-white">
                        Technology
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;