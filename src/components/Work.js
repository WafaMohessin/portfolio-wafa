import "./WorkCardStyles.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"

import React from 'react'
// import Pro1 from "../assets/Clouds.jpg"
// import {NavLink} from "react-router-dom"

const Work = (props) => {
  return (
    <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="projet-container">
        {WorkCardData.map((val, ind)=>{
            return(
                <WorkCard
                key={ind}
                imgsrc={val. imgsrc}
                title={val. title}
                text={val. text}
                view={val. view}
                />
            )
        })}
   
    </div>
    </div>


  )
}

export default Work;
