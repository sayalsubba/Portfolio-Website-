import React from 'react'
import Css from "./Experience.module.css"
import Card from "../../Assets/image.webp"
import {motion, scale} from "framer-motion";

export default function Experience() {
  const main = {
    hidden:{opacity:0, y:20},
    visible:{opacity:1, y:0, transition:{staggerChildren:0.3}},
  }
    const item = {
    hidden:{opacity:0, y:20},
    visible:{opacity:1, y:0, transition:{duration:1}},
  }

  const card = {
    first:{opacity:0, x:20},
    second:{opacity:1, x:0, transition:{staggerChildren:0.2}},
  }

  const imgCard = {
    first:{opacity:0, x:-20},
    second:{opacity:1, x:0, transition:{duration:0.5}},
    
  }
  return (
    <>
      <div className={Css["main"]} id='experience'>
        <motion.div 
       variants={main} initial="hidden" whileInView="visible" 
       viewport={{once:true, amount:0.2}}
        className={Css["mainExperience"]}>
          <motion.p variants={item} >My Skills</motion.p>
          <motion.h1 variants={item}>Portfolio</motion.h1>
        </motion.div>

        <motion.div variants={card} initial="first" whileInView="second" 
        viewport={{once:true, amount:0.2}}
        className={Css["mainExperienceCard"]}>
          <motion.img variants={imgCard} src={Card} alt="" />
          <motion.img variants={imgCard} src={Card} alt="" />
          <motion.img variants={imgCard} src={Card} alt="" />
          <motion.img variants={imgCard} src={Card} alt="" />
          <motion.img variants={imgCard} src={Card} alt="" />

        </motion.div>
      </div >
    </>
  )
}

export { Experience };

