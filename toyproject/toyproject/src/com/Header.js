import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { img_logo } from "../images";

const Header = ({ islogin, loginID, setisLogin }) => {
  const nav = useNavigate();
  function move(e) {
    // console.log(e.target.innerHTML);
    // e.target.innerHTML == "게시판" ? console.log("성공") : console.log("실패?");
    if (e.target.innerHTML == "") {
      nav("/");
    } else if (e.target.innerHTML == "게시판") {
      nav("/board");
    } else if (e.target.innerHTML == "구름방") {
      nav("/cloud");
    } else if (e.target.innerHTML == "로그인") {
      nav("/login");
      // } else if (e.target.innerHTML == { loginID }) {
      //   nav("/sign");
    } else if (e.target.innerHTML == "로그아웃") {
      setisLogin(false);
      nav("/");
    }
  }
  return (
    <div className="header">
      <div className="header_wrap">
        <div className="header_home">
          <img src={img_logo} onClick={move}></img>
        </div>
        <div className="header_board">
          <a onClick={move}>게시판</a>
        </div>
        <div className="header_cloud">
          <a onClick={move}>구름방</a>
        </div>
        {islogin ? (
          <button className="header_login_btn" onClick={move}>
            로그아웃
          </button>
        ) : (
          <button className="header_login_btn" onClick={move}>
            로그인
          </button>
        )}

        {/* <div className="header_login">
          <a onClick={move}>로그인</a>
        </div> */}
        <div className="header_sign">
          {islogin ? <a>{loginID}님 환영합니다.</a> : <a>로그인 하쇼</a>}
        </div>
      </div>
    </div>
  );
};

export default Header;
