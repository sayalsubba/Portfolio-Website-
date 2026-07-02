import React from 'react'
import Css from "./Experience.module.css"
import Card from "../../Assets/image.webp"
export default function Experience() {
  return (
    <>
      <div className={Css["main"]} id='experience'>
        <div className={Css["mainExperience"]}>
          <p>My Work</p>
          <h1>Portfolio</h1>
        </div>
        <div className={Css["mainExperienceCard"]}>
          <img src={Card} alt="" />
          <img src={Card} alt="" />
          <img src={Card} alt="" />
          <img src={Card} alt="" />
          <img src={Card} alt="" />
 
        </div>
      </div>
    </>
  )
}

export { Experience };

