import React from "react";
import './SignUp.css';
import { Link } from 'react-router-dom';
import netflix from "./netflix.png";


function Signup() {
    return (
        <>
            <div className="container-fluid external_container pb-3">
                <nav className="navbar">
                    <div className="container-fluid inner-container px-lg-5 px-3  d-flex align-items-center " >
                        <Link to='/'><img className="logo-img" src={netflix} alt="logo" /></Link>
                    </div>
                </nav>
                <div className="container-fluid external-container1 d-flex align-items-center">
                    <div className="container form_container py-2 px-4">
                        <h1 className="pb-3 text-center">Sign Up</h1>
                        <form>
                            <div className="mb-3 ">
                                <label for="username" className="form-label">Username: </label>
                                <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="enter your name" style={{ borderRadius: '0' }} />
                            </div>
                            <div className="mb-3 ">
                                <label for="email-address" className="form-label">Email address: </label>
                                <input type="email" className="form-control" id="email-address" aria-describedby="emailHelp" placeholder="enter email address" style={{ borderRadius: '0' }} />
                            </div>
                            <div className="mb-3">
                                <label for="user-password" className="form-label">Password: </label>
                                <input type="password" className="form-control" id="user-password" placeholder="enter password" style={{ borderRadius: '0' }} />
                            </div>
                            <button type="submit" className="btn login_btn mt-4 mb-3">Sign Up</button>
                            <p>Already have an account? &nbsp; <span><Link to='/login' style={{ color: 'white', fontWeight: '600' }}>Login</Link></span></p>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;