import  "./HeroImgStyles.css"
import Waterfall from "../assets/Waterfall.jpg"
import {Link} from "react-router-dom"


import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"src={Waterfall} alt="Waterfall" />
        </div>
        
        <div className="content">
            <p>Hi! I am a FREELANCE.</p>
            <h1>Code and Design</h1>
            <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg;
