import React from "react";
import { Board_Write, Login_form, Sign_form, Main_text } from "../comcom";

const Body = ({
  title,
  sign,
  onSignin,
  setLoginID,
  setLoginPW,
  activeLogin,
  loginID,
  islogin,
  bdTitle,
  setBdTitle,
  bdContents,
  setBdContents,
}) => {
  return (
    <div className="body">
      {title && title == "main" ? <Main_text /> : null}
      {title && title == "login" ? (
        <Login_form
          setLoginID={setLoginID}
          setLoginPW={setLoginPW}
          activeLogin={activeLogin}
        />
      ) : null}
      {title && title == "board" ? (
        <Board_Write
          loginID={loginID}
          islogin={islogin}
          bdTitle={bdTitle}
          setBdTitle={setBdTitle}
          bdContents={bdContents}
          setBdContents={setBdContents}
        />
      ) : null}
      {title && title == "sign" ? (
        <Sign_form sign={sign} onSignin={onSignin} />
      ) : null}
    </div>
  );
};

export default Body;
