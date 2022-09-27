import React from "react";
import { useNavigate } from "react-router-dom";

const Login_form = ({ setLoginID, setLoginPW, activeLogin }) => {
  const nav = useNavigate();
  const keyInput_id = (e) => {
    setLoginID(e.target.value);
  };
  const keyInput_pw = (e) => {
    setLoginPW(e.target.value);
  };
  function gogo() {
    nav("/sign");
  }
  return (
    <div className="login_form">
      <div className="login_form_wrap">
        <h1>로그인하기</h1>
        <div>
          <p>아이디</p>
          <input onChange={keyInput_id}></input>
        </div>
        <div>
          <p>비밀번호</p>
          <input onChange={keyInput_pw}></input>
        </div>
        <div>
          <button className="login_btn" onClick={activeLogin}>
            로그인
          </button>
        </div>
        <div>
          <button className="join_btn" onClick={gogo}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login_form;
