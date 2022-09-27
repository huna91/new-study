import React from "react";
import { Header, Body, Footer } from "../com";

const Main = ({ islogin, setisLogin, loginID }) => {
  return (
    <div className="main">
      <Header islogin={islogin} setisLogin={setisLogin} loginID={loginID} />
      <Body title="main" />
      <Footer />
    </div>
  );
};

export default Main;
