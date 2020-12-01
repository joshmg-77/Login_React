import React from "react"

const InputEmail = (props)=>{

    return(
     <label className="label">
       <i className="far fa-envelope an" ></i>
       <input 
         type="email" 
         name="email"
         placeholder="email" 
         className="text"
       /> 
     </label>
        
    ) 
   }

   export default InputEmail