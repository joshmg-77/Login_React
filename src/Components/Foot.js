import React, { Fragment } from "react";
import { NewAccount, LogIn } from "../Functions/LogInAndSignup";
import "../styles/Foot.css";


const Foot = (props) => {
  return (
    <div className="foot">
      {props.title === "login" ? (
        <Fragment>
          <a href={window.location.href} className="more">
            Forgot password?
          </a>
          <a
            href={window.location.href}
            className="account more"
            onClick={NewAccount}
          >
            Create one
          </a>
        </Fragment>
      ) : (
        <Fragment>
          <p>Already account!!?</p>
          <a
            href="http://localhost:3000"
            className="account more"
            onClick={LogIn}
          >
            Log in
          </a>
        </Fragment>
      )}
    </div>
  );
};

export default Foot;

/*you would change  window.location.href to your url real */