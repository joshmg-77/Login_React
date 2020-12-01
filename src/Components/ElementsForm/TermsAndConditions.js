import React from "react";

import "../../styles/TermsAndCnditions.css";


const TermsConditions =(props)=>{
    return(
      <label className="labelCheck">
        Acept terms and conditions <input type="checkbox" className="check" /><span className="span"></span>
      </label>
    )
  }

  export default TermsConditions