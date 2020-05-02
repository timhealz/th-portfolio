import React from 'react';
import './style.css';

import IconLinks from '../IconLinks'

function Footer() {
    return (
        <div className="footer">
            <p>Copyright &copy; {new Date().getFullYear()} Tim Healy</p>
            <IconLinks />
        </div>
    );
}

export default Footer;
