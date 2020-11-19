import React from 'react'
import {} from "react-bootstrap";
import Sytlecss from "../assets/styles/menu.module.css";
const menu = () => {
  return (
    <div className={Sytlecss.mn}>
       <h style={{ backgroundColor: "#AA6242" ,display:"block",color:"#FFFFFF",fontSize:"40px",paddingLeft:"15px"}}>กาแฟ</h>
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
