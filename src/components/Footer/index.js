import React from 'react';
import './style.css';

function Footer() {
    return (
        <div className="footer">
            <p>Copyright &copy; {new Date().getFullYear()} Tim Healy</p>
        </div>
    );
}

export default Footer;
