import React from 'react';
import Header from '../global/Header';
import Footer from '../global/Footer';
import SignUpForm from '../form/SignUpForm';

function SignUp() {
    return (
        <div className="Page__Wrapper">
            <Header links={["Home", "sign-up"]} />
            <div className="Container">
                <SignUpForm />
            </div>
            <Footer />
        </div>
        
    )
}

export default SignUp;