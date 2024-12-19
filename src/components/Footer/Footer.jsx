import React from "react";
import "./Footer.css"; // Import the styles for the footer

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <ul className="footer-links">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/service">Services</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <p>&copy; {new Date().getFullYear()} CargoVertex Logistic. All rights reserved.</p>
            </div>
            <div className="footer-developer">
                Developed by <a href="https://www.erencedevelopers.co.za" target="_blank" rel="noopener noreferrer">Erence Developers</a>
            </div>
        </footer>
    );
};

export default Footer;
