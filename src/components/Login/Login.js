import React from 'react'
import netflix from './netflix.png'

import './login.css';
import { Link } from 'react-router-dom';


function Login() {
    return (
        <>
            <div className="container-fluid external_container ">
                <nav className="navbar">
                    <div className="container-fluid inner-container px-lg-5 px-3 py-3 d-flex align-items-center " >
                        <Link to='/'><img className="logo-img" src={netflix} alt="logo" /></Link>
                    </div>
                </nav>
                <div className="container-fluid external-container1 d-flex align-items-center">
                    <div className="container form_container py-4  px-5">
                        <h1 className="pb-3 text-center">Login</h1>
                        <form>
                            <div className="mb-3 ">
                                <label for="email-address" className="form-label">Email address: </label>
                                <input type="email" className="form-control" id="email-address" aria-describedby="emailHelp" placeholder="enter email address" style={{ borderRadius: '0' }} />
                            </div>
                            <div className="mb-3">
                                <label for="user-password" className="form-label">Password: </label>
                                <input type="password" className="form-control" id="user-password" placeholder="enter password" style={{ borderRadius: '0' }} />
                            </div>
                            <button type="submit" className="btn login_btn mt-4 mb-3">Login</button>
                            <p>Don't have an account? &nbsp; <span><Link to='/signup' style={{ color: 'white', fontWeight: '600' }}>Sign Up</Link></span></p>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;