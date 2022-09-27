import { React, useState } from "react";
import { Header, Body, Footer } from "../com";

const Board = ({ islogin, setisLogin, loginID }) => {
  const [bdTitle, setBdTitle] = useState([]);
  const [bdContents, setBdContents] = useState([]);
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
