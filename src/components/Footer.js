import "./FooterStyles.css";

import React from 'react'
import {FaHome} from "react-icons/fa"
import {FaPhone} from "react-icons/fa"
import {FaMailBulk} from "react-icons/fa"
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            {/* we creating to section in the footer right and lift */}
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginright: "2rem"}}/>
                </div>
                    <p>1412 Ann Arbor,</p>
                    <p>Michigan</p>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginright: "2rem"}}/> 01 (469)999-9999 </h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginright: "2rem"}}/>wafamohessincode@gmail.com</h4>
                </div>
            </div>
 
            <div className="right">
                <h4>About me</h4>
                <p>This is Wafa Mohessin. UI Software Developer. I enjoy discussing new projects and design challanges.</p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff", marginright: "1rem"}}/>
                <FaInstagram size={30} style={{color:"#fff", marginright: "1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff", marginright: "1rem"}}/>
            </div>

                </div>
            </div>

        </div>

  )
}

export default Footer;