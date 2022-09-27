import React from "react";
import { Header, Body, Footer } from "../com";

const Sign = ({ setisLogin, sign, onSignin }) => {
  return (
    <div>
      <Header setisLogin={setisLogin} />
      <Body title="sign" sign={sign} onSignin={onSignin} />
      <Footer />
    </div>
  );
};

export default Sign;
