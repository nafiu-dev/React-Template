import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <header>
                <nav className="navbar navbar-expand-md navbar-light fixed-top">
                <Link to="/" className="navbar-brand">Race</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                        <i className="fas fa-bars fa-lg"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item"><NavLink to="/" className="nav-link" exact={true}>Home</NavLink></li>
                            <li className="nav-item"><NavLink to="/Services" className="nav-link">Services</NavLink></li>
                            <li className="nav-item"><NavLink to="/Blogs" className="nav-link">Blog</NavLink></li>
                            <li className="nav-item"><NavLink to="/About" className="nav-link">About</NavLink></li>
                            <li className="nav-item"><NavLink to="/Contact" className="nav-link">Contact</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}
export default Navbar;