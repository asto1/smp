import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
            <div>
                <p>&copy; {new Date().getFullYear()} SMP MAARIF NU DUKUHWARU. All rights reserved.</p>
                <p>
                    <a href="/about">About Us</a> | 
                    <a href="/admission">Admission</a> | 
                    <a href="/gallery">Gallery</a> | 
                    <a href="/contact">Contact</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;