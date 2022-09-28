import { React, useState } from "react";
import { Header, Body, Footer } from "../com";

const Board = ({
  islogin,
  setisLogin,
  loginID,
  bdTitle,
  setBdTitle,
  bdContents,
  setBdContents,
}) => {
  console.log(bdTitle);
  console.log(bdContents);
  return (
    <div className="board">
      <Header setisLogin={setisLogin} loginID={loginID} islogin={islogin} />
      <Body
        title="board"
        loginID={loginID}
        islogin={islogin}
        bdTitle={bdTitle}
        setBdTitle={setBdTitle}
        bdContents={bdContents}
        setBdContents={setBdContents}
      />
      <Footer />
    </div>
  );
};

export default Board;
