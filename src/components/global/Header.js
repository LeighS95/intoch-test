import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header(props) {
    return (
        <header className="Header">
            <div className="Header__Logo">LOGO</div>
            <nav className="Nav">
                <ul className="Nav__List">
                    {/* map through props as to avoid hard coding */}
                    {props.links.map(item => (
                        <li className="Nav__List_Item"><Link to={`${item}`}>{item}</Link></li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}