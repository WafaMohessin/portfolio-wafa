import "./AboutContentStyles.css"

import React from 'react'
import {Link} from "react-router-dom"
import Picture1 from "../assets/waters.jpg"
import Picture2 from "../assets/Waterfall.jpg"

const AboutCotent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a react front-end developer. I create reponsive secure website for my clients</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Picture1} className="img" alt="waterpicture"/>

                </div>
                <div className="img-stack bottom">
                    <img src={Picture2} className="img" alt="waterfallpicture"/>

                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutCotent;