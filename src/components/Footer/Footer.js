import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer bg-dark py-3 text-center">
            <div className="ps-5 d-flex justify-content-between">
            <div className="text-start">
                <p><span className="text-color fs-1">English </span><small className="text-white">Discovery</small></p>
                <h5 className="text-white">Learn English online
                <br /> with expert teachers and structured courses. </h5>
            </div>
            <div className="text-white ms-auto pe-5 text-start">
                <p>Contact-Info</p>
                <p><i class="far fa-envelope"></i>        Email:englishdiscovery@gmail.com</p>
                <p><i class="fas fa-phone-alt"></i> Call us: 017555-44444</p>
                <p><i class="fas fa-map-marker-alt"></i> Sector-1, Uttara, Dhaka 1230</p>
            </div>
            <div>

            </div>
            </div>
            <span><i class="fab fa-facebook social-icon"></i></span>
            <span><i class="fab fa-instagram social-icon"></i></span>
            <span><i class="fab fa-twitter social-icon"></i></span>
            <span><i class="fab fa-youtube social-icon"></i></span>
            <br />
            <small className="text-white pt-3">© English Discovery 2021. All Rights Reserved</small>
        </div>
    );
};

export default Footer;