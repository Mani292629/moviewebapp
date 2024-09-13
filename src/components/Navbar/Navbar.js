import React from 'react';
import netflix from './netflix.png';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid inner-container px-lg-5 px-3 py-3 d-flex align-items-center " >
                    <Link to='/'><img className="logo-img" src={netflix} alt="logo" /></Link>
                    <Link to='/login'><div className="btn sign_in-btn" >Sign In</div></Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;