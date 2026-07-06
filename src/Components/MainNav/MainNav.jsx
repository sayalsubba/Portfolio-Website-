import React, { useEffect, useState } from 'react';
import Css from "./MainNav.module.css";
import Logo from "../../Assets/sayal.png";
import { motion, spring } from "framer-motion";
import { Link, Outlet } from 'react-router-dom';

export default function MainNav() {

  return (
    <>
      <div className={Css["Main"]} >
        <div className={Css["mainNav"]}>
          <div className={Css["LeftNav"]}>
            <a href="#home"> <img src={Logo} alt="Sayal Subba" /></a>
          </div>
          <div className={Css["RightNav"]}>
            <a href="#home">Home</a>
            <a href="#experience">My Experience</a>

            <a href="#contact-us"

            ><motion.button
              whileHover={{
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", damping: 10 }}
              id='btn'
            > Hire Me</motion.button>
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export { MainNav };
