import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="d-flex justify-content-around background">
            <div>
                <h1>Latest News</h1>
                <p>we have grate news for you, in future <br />we will lounce 6 month full time job preparing training.<br /> This dental services will help you in your proffessional life.<br /> Our Doctors will be most expertise and most proffessional</p>
            </div>
            <div>
                <h1>Our Courses</h1>
                <ul>
                    <li>Dental Crowns</li>
                    <li>Cosmetic Fillings </li>
                    <li>Dental Bonding</li>
                    <li>Dental Veneers</li>
                    <li>Root Canal Therapy</li>
                    <li>Dental Sealants</li>
                </ul>
            </div>
            <div>
                <h1>Subscribe</h1>
                <input type="text" placeholder='Enter your email' />
                <br />
                <br />
                <button type="button" class="btn btn-warning">Subscribe</button>
            </div>
        
        </div>
        <footer>@copyright 2021</footer>
        </div>
        
    );
};

export default Footer;