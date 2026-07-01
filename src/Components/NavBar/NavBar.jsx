import React from 'react'
import Css from "./NavBar.module.css"
import { Route, Routes } from 'react-router-dom';
import { faFacebook, faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NavBar() {
 

  return (
    <>
      <div className={Css["allMain"]}>

        <div className={Css["main"]}>
          <div className={Css["mainNav"]}>
            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
            <a href=""><FontAwesomeIcon icon={faXTwitter} /></a>
            <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
          <div className={Css["right"]}>
            <p>9828469175</p>
            <span> | </span>
            <p>sahilphago23@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

export { NavBar };
