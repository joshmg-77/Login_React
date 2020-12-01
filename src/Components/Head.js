import React from "react";
import "../styles/Head.css";
import Dos_Pinos from "../assets/Dos_Pinos.svg"

const Head=(props)=>{
    return(
      <div className="head">
          <div className="cont"> 
            {props.children}{/* svg and logo according if we're in back face or front face*/}
          </div>      
          <img src={Dos_Pinos} alt="Dos Pinos" className="title" draggable="false"/>
            <h4 className="title2">{props.Register}</h4>
      </div>
    )
  }
export default Head
  