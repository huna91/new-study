import { React, useState } from "react";
import { Header, Body, Footer } from "../com";

const Login = ({
  setisLogin,
  islogin,
  setLoginID,
  setLoginPW,
  userData,
  activeLogin,
}) => {
  return (
    <div>
      <Header userData={userData} setisLogin={setisLogin} />
      <Body
        title="login"
        setLoginID={setLoginID}
        setLoginPW={setLoginPW}
        activeLogin={activeLogin}
      />
      <Footer />
    </div>
  );
};

export default Login;
