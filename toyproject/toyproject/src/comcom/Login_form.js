import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login_form = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const nav = useNavigate();

  const [loginID, setLoginID] = useState();
  const [loginPW, setLoginPW] = useState();

  const keyInput_id = (e) => {
    setLoginID(e.target.value);
  };
  const keyInput_pw = (e) => {
    setLoginPW(e.target.value);
  };
  function login() {
    userData.some((e) => {
      if (e.userId == loginID) {
        if (e.userPw == loginPW) {
          dispatch({
            type: "login",
            payload: loginID,
          });
          return nav("/");
        } else {
          alert("아이디 비밀번호 확인");
        }
      }
    });
  }
  function signGo() {
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
          <button className="login_btn" onClick={login}>
            로그인
          </button>
        </div>
        <div>
          <button className="join_btn" onClick={signGo}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login_form;
