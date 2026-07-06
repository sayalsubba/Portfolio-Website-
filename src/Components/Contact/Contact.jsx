import React from 'react'
import Css from "./Contact.module.css"
export default function Contact() {
  return (
    <>
      <div className={Css["main"]} id='contact-us'>

        <div className={Css["mainContact"]}>
          <p>GET IN TOUCH</p>
       <h1>CONTACT US</h1>
          <div className={Css["leftContact"]}>


          </div>
          <div className={Css["rightContact"]}>


          </div>
        </div>

      </div>

    </>
  )
}
export { Contact };
