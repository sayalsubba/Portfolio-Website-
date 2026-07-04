import React from 'react'
import Css from "./Home.module.css"
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { motion, scale } from "framer-motion"
import profile from "../../Assets/img1.webp"
import Hero from "../../Assets/herobg.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Home() {
  const container = {
    hidden: { opacity: 0, },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  }
  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }
  return (
    <>

      <div className={Css["main"]} id='home'>
        <img src={Hero} className={Css["hero"]} alt="" />
        <div className={Css["mainHome"]}>
          <motion.div
            variants={container} initial="hidden" whileInView="visible"

            viewport={{ once: true, amount: 0.2 }}
            className={Css["leftMain"]}>
            <motion.p variants={item}>How it Works?</motion.p>
            <motion.h1 variants={item}>We Help You Prioritize Your Project</motion.h1>
            <motion.p variants={item}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </motion.p>
            <motion.button variants={container} whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 15 }}
              whileTap={{ scale: 0.9,y:-10 }}>
              Download CV
            </motion.button>
            <motion.div className={Css["mainFont"]}>
       <span>Follow </span>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faFacebook} />
                  
            </motion.div>
          </motion.div >


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            viewport={{ once: true, amount: 0.2 }}
            className={Css["rightMain"]}>
            <img src={profile} alt="" />

          </motion.div>



        </div>
      </div>

    </>
  )
}
export { Home };
