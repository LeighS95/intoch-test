import React, { Component } from 'react';
import Field from '../fields/Field';
import './form.css';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            fullName: '',
            phone: '',
            email: '',
            dob: Date,
            errors: {
                name: null,
                phone: null,
                email: null,
                dob: null
            }
        }
    }

    //Updates state on Change
    onChange = e => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        
        switch(name) {
            case 'fullName':
                if(!/^[a-z]+$/i.test(value)) {
                    this.setState(prevState => ({errors: { ...prevState, name: true } }))
                } else {
                    this.setState(prevState => ({errors: { ...prevState, name: false } }))
                }
                break;
            case 'phone':
                if(!value.match(/[^0-9]/)) {
                    this.setState(prevState => ({errors: { ...prevState, phone: true } }))
                } else {
                    this.setState(prevState => ({errors: { ...prevState, phone: false } }))
                }
                break;
            case 'email':
                if(!/@/.test(value) && /.com/.test(value)) {
                    this.setState(prevState => ({errors: { ...prevState, email: true } }))
                } else {
                    this.setState(prevState => ({errors: { ...prevState, email: false } }))
                }
                break;
            case 'dob':
                if(value) {
                    let date = new Date(value);
                    let today = new Date();
                    let diff = (today - date)/(1000*60*60*24*365);
                    console.log(diff)
                    if(!diff >= 18) {
                        this.setState(prevState => ({errors: { ...prevState, dob: true } }))
                    } else {
                        this.setState(prevState => ({errors: { ...prevState, dob: false } }))
                    }
                }
                break;
        }
    }

    onSubmit = e => {
        e.preventDefault();

        const { name, phone, email } = this.state;
        const { dob } = this.state.errors;

        if(name !== '' && phone !== '' && email !== '' && dob !== true) {
            // return <Redirect to="/thank-you" />;
            window.location.replace("/thank-you");
        } else {
            window.location.replace("/505");
        }
    }

    nextStep = e => {
        e.preventDefault();
        this.setState({
            step: this.state.step + 1
        })
    }
    prevStep = e => {
        e.preventDefault();
        this.setState({
            step: this.state.step - 1
        })
    }

    stepOne = () => {
        return (
            <div>
                <Field name="fullName" onChange={this.onChange} value={this.state.fullName} text="Full Name" />
                {this.state.errors.name === true ? ( <div className="Error__Msg">Enter full name</div>) : null}
                <Field name="phone" onChange={this.onChange} value={this.state.phone} text="Phone Number" />
                {this.state.errors.name === true ? ( <div className="Error__Msg">Enter valid phone number</div>) : null}
                <div className="Form__Buttons">
                    <button className="Form__Button" onClick={this.nextStep}>Continue</button>
                </div>
            </div>
        )
    }

    stepTwo = () => {
        return (
            <div>
                <Field name="email" type="email" onChange={this.onChange} value={this.state.email} text="Email" />
                {this.state.errors.name === true ? ( <span className="Error__Msg">Enter valid email</span>) : null}
                <Field name="dob" onChange={this.onChange} value={this.state.dob} text="D.O.B" type="date" />
                {this.state.errors.name === true ? ( <span className="Error__Msg">You MUST be over 18</span>) : null}
                <div className="Form__Buttons">
                    <button className="Form__Button" onClick={this.prevStep}>Back</button>
                    <button className="Form__Button" onClick={this.nextStep}>Continue</button>
                </div>
            </div>
        )
    }

    stepThree = () => {
        return (
            <div>
                <h2>Your Details</h2>
                <ul className="Detail__List">
                    <li className="Detail__List_Item"><strong>Full Name</strong> - {this.state.fullName}</li>
                    <li className="Detail__List_Item"><strong>Phone Number</strong> - {this.state.phone}</li>
                    <li className="Detail__List_Item"><strong>Email Address</strong> - {this.state.email}</li>
                    <li className="Detail__List_Item"><strong>Date Of Birth</strong> - {this.state.dob}</li>
                </ul>
                <div className="Form__Buttons">
                    <button className="Form__Button" onClick={this.prevStep}>Back</button>
                    {this.state.errors.dob === true || this.state.errors.dob == null ? (
                        <button className="Form__Button deactive" onClick={this.onSubmit} disabled>Submit</button>
                    ) : (
                        <button className="Form__Button" onClick={this.onSubmit}>Submit</button>
                    )}
                </div>
            </div>
        )
    }

    setStep = () => {
        switch(this.state.step) {
            case 2:
                return (
                    this.stepTwo()
                )
            case 3:
                return (
                    this.stepThree()
                )
            default:
                return (
                    this.stepOne()
                )
        }
    }

    render() {

        return (
            <form id="signup-form" className="Form__SignUp">
                {this.setStep()}
                {console.log(this.state)}
            </form>
        )
    }
}


export default SignUpForm;