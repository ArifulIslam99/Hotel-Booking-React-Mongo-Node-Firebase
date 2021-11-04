import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-all w-100 p-3">
        <div className="footer row ">
        <div className="col-lg-4 col-xs-12 my-2">
            <h2 style={{fontFamily: 'cursive'}}>Hotel Exodia Private Limited</h2>
            <p>Service is Our Passion!</p>
            
        </div> 
        
        <div className="col-lg-4 col-xs-12 my-2">
            <h3>Quick Visit</h3>
            <p><Link className="url"  to="/home">Home   </Link></p>
            <p><Link className="url"  to="/about">About </Link></p>
            

            

        </div> 
        <div className="col-lg-4 col-xs-12 my-2">
            <h3>Contact Us</h3>
            <p>admin@exodia.com</p>
            <p>099-8888-77-258</p>
        </div>
    </div>
    <div>
        <footer>© Copyright 2020 by Hotel Exodia Private Limited</footer>
    </div>
    </div>
    );
};

export default Footer;