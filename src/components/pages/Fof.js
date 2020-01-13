import React from 'react';
import { Link } from "react-router-dom";
import Header from '../global/Header';
import Footer from '../global/Footer';
import './fof.css';

export default function ThankYou() {
    return (
        <div className="Page__Wrapper">
            <Header links={["Home", "sign-up"]} />
            <div className="Container">
                <div className="Content">
                    <h1 className="Fof__Title">Ooops....Something Went Wrong!</h1>
                    <p className="Fof_Text">Would you like to go home?</p>
                    <Link className="Link__Button" to="/">Home</Link>
                </div>
            </div>
            <Footer />
        </div>
        
    )
}
