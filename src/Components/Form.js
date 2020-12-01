import React from "react";
import {useForm} from "react-hook-form";
import {NextInput,ShowPassword,Focus,Blur} from "../Functions/Form"
import "../styles/Form.css";

/*Composition component*/
const Form = ({children,focus,blur,terms,Submit}) => {


  const {register,errors,handleSubmit} = useForm();


  const HandledSubmit =(e)=>{
      //useState setvalues and/or using redux action or update query using react-query.....this about how to send data
      console.log(e.email,e.pass)
  }
  

  return (
    <form className="form" onSubmit={handleSubmit(HandledSubmit)}>

      <label className="label">
        <i className="far fa-user an"></i>
        <input
          type="text"
          name="texto"
          placeholder="name"
          className="text"
          ref={register({
            required:"this field is required"
          })} 
          onKeyUp={(e) =>NextInput(e, "pass")}
        />
      </label>

      {errors.texto && <span className="error">{errors.texto.message}</span>}

      {/*props.children for more elements */}    
      {children}

      <label className="label password">
        <p onClick={ShowPassword}>
          <i className="fas fa-lock other"></i>
        </p>
        <input
          type="password"
          name="pass"
          placeholder="password"
          className="pass"
          ref={register({
            required:{
                value:true,
                message:"this field is needed"
            },
            minLength:{
                value:8,
                message:"you needed a password more than 8 characters"
            }
          })}
          onFocus={Focus || focus}
          onBlur={Blur || blur}
          value={null}
        />
      </label>
      
      {errors.pass && <span className="error" >{errors.pass.message}</span>}

      {/*Component as props...front face Submit with text different equal to back face with text different */}    
      {terms}

      {Submit}    
    </form>
  );
};

export default Form;


