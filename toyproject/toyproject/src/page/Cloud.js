import React from "react";
import { Header, Body, Footer } from "../com";

const Cloud = ({ islogin, setisLogin, loginID }) => {
  return (
    <div>
      <Header setisLogin={setisLogin} loginID={loginID} islogin={islogin} />
      <Body islogin={islogin} />
      <Footer />
    </div>
  );
};

export default Cloud;
