import React from 'react'
import Css from "./Footer.module.css"
export default function Footer() {
    const currrentYear = new Date().getFullYear()
  return (
<>
<div className={Css["main"]}>
<footer>
<p>{currrentYear} © Sayal — All Rights Reserved</p>
</footer>

</div>
</>  
)
}
export{Footer};

