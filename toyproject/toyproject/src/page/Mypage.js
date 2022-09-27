import React from "react";
import { Header } from "../com";

const Mypage = ({ islogin, setisLogin, loginID }) => {
  return (
    <div>
      <Header setisLogin={setisLogin} loginID={loginID} islogin={islogin} />
    </div>
  );
};

export default Mypage;
