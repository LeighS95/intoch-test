import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer__Section">
                <ul className="Footer__Section__List">
                    <li className="Footer__Section__List_Title">List Title</li>
                    <li className="Footer__Section__List_Item">Item 1</li>
                    <li className="Footer__Section__List_Item">Item 2</li>
                    <li className="Footer__Section__List_Item">Item 3</li>
                </ul>
            </div>

            <div className="Footer__Section">
                <ul className="Footer__Section__List">
                    <li className="Footer__Section__List_Title">List Title 2</li>
                    <li className="Footer__Section__List_Item">Item 1</li>
                    <li className="Footer__Section__List_Item">Item 2</li>
                    <li className="Footer__Section__List_Item">Item 3</li>
                    <li className="Footer__Section__List_Item">Item 4</li>
                </ul>
            </div>

            <div className="Footer__Section">
                <ul className="Footer__Section__List">
                    <li className="Footer__Section__List_Title">List Title 3</li>
                    <li className="Footer__Section__List_Item">Item 1</li>
                    <li className="Footer__Section__List_Item">Item 3</li>
                    <li className="Footer__Section__List_Item">Item 4</li>
                    <li className="Footer__Section__List_Item">Item 5</li>
                </ul>
            </div>
        </footer>
    )
}
