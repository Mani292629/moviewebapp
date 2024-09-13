import React from "react";
import './hero.css';
import Navbar from "../Navbar/Navbar";
import {Link} from "react-router-dom"


const Hero = () => {
    return (
        <>
            <div className="container-fluid main-container">
                <Navbar />
                <div className="container-fluid hero-container d-flex justify-content-center align-items-center ">
                    <div className="container hero-inner text-center">
                        <h1 className="mb-4 ">Enjoy big movies, hit series and more from ₹149.</h1>
                        <p className="para1 mb-4">Join today.Cancel anytime.</p>
                        <p className="para2 mb-4">Ready to watch? Just sign in or create an account to enjoy.</p>
                        <div >
                            <Link to='/Movies' className=" btn start-btn py-2 px-4 mb-3">Get Started</Link></div>
                    </div>
                </div>
            </div>
            
            
        </>
    );
};

export default Hero;


