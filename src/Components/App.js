import React from "react";
import "../styles/App.css";
import Head from "./Head";
import Form from "./Form";
import Foot from "./Foot";
import InputEmail from "./ElementsForm/InputEmail";
import TermsConditions from "./ElementsForm/TermsAndConditions";
import InputSubmit from "./ElementsForm/InputSubmit";
import LogoMain from "../assets/LogoMain.png";
import IceCream1 from "../assets/icecream1.svg";
import IceCream2 from "../assets/icecream2.svg";

const App = () => {
  return (
    <div className="container">
      {/*Front face*/}
      <div className="front">
        <Head>
          <img className="svg " alt="IceCream" src={IceCream1} />
          <img className="svg " alt="IceCream" src={IceCream2} />
          <img src={LogoMain} alt="Dos Pinos" className="img" />
        </Head>
        <Form Submit={<InputSubmit title="login" />} />
        <Foot title="login" />
      </div>

      {/*Back face*/}
      <div className=" back">
        <Head Register="Create Account" />
        <Form
          terms={<TermsConditions />}
          Submit={<InputSubmit title="continue" />}
          focus={() => {}}
          blur={() => {}}
        >
          <InputEmail />
        </Form>
        <Foot title="continue" />
      </div>
    </div>
  );
};

export default App;
