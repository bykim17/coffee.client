import React from 'react'
import {} from "react-bootstrap";
import Sytlecss from "../assets/styles/menu.module.scss";
const menu = () => {
  return (
    <div className={Sytlecss.mn}>
       
       <h className={Sytlecss.text_h} >กาแฟ </h>
      <div className={Sytlecss.text_p}>
       <p>กาแฟชนิดบด</p>
       <p>กาแฟชนิดเมล็ด</p>
       <p>กาแฟชนิดพ็อดส์</p>
       <p>กาแฟผงสำเร็จรูป</p>
       <p>กาแฟแคปซูล</p>
      </div>
      </div>
      
    
  )
}

export default menu
