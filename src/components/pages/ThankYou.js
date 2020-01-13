import React from 'react';
import { Link } from "react-router-dom";
import Header from '../global/Header';
import Footer from '../global/Footer';
import './thankyou.css';

export default function ThankYou() {
    return (
        <div className="Page__Wrapper">
            <Header links={["Home", "sign-up"]} />
            <div className="Container">
                <div className="Content">
                    <h1 className="Thanks__Title">Thank you for Signing up</h1>
                    <p className="Thanks_Text">Where would you like to go?</p>
                    <Link className="Link__Button" to="/">Home</Link>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}
