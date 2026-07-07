import React from 'react'
import Css from "./Contact.module.css"
import { motion } from "framer-motion";
export default function Contact() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }
  return (
    <>
      <motion.div 
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, amount:0.2}}
      className={Css["main"]} id='contact-us'>
        <motion.p variants={item}>GET IN TOUCH</motion.p>
        <motion.h1 variants={item}>CONTACT US</motion.h1>
        <motion.div
          className={Css["mainContact"]}>
          <div className={Css["leftContact"]}>
            <p>Lets Talk</p>
          </div>
          <div className={Css["rightContact"]}>
            <input placeholder='Enter Your Name' type="text" />
            <input placeholder='Enter email' type="text" />
          </div>
        </motion.div>

      </motion.div >

    </>
  )
}
export { Contact };
