import React, { Component } from 'react';
import './field.css';

class Field extends Component {
    onChange = e => {
        this.props.onChange(e)
    }

    render() {
        return (
            <div className="Form__Field">
                <label className="Form__Field_Label">{this.props.text}</label>
                <input className="Form__Field_Input" name={this.props.name} value={this.props.value} onChange={this.onChange} type={this.props.type} required />
            </div>
        )
    }
}

export default Field;