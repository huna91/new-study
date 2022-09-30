import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Sign_form = ({ sign, onSignin }) => {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const [idValue, setIdValue] = useState();
  const [pwValue, setPwValue] = useState();
  const [pwCheckValue, setPwCheckValue] = useState();
  const keyInput_id = (e) => {
    setIdValue(e.target.value);
  };
  const keyInput_pw = (e) => {
    setPwValue(e.target.value);
  };
  const keyInput_check = (e) => {
    setPwCheckValue(e.target.value);
  };
  let count = 0;
  function join() {
    if (pwValue == pwCheckValue) {
      let data = {
        num: count,
        userId: idValue,
        userPw: pwValue,
      };
      console.log(data);
      dispatch({ type: "join", payload: data });
    } else {
      alert("비밀번호를 확인하세요");
    }
    navi("/login");
  }
  return (
    <div className="sign_form">
      <div className="sign_form_wrap">
        <h1>회원가입하기</h1>
        <div>
          <p>아이디</p>
          <input id="input_id" onChange={keyInput_id}></input>
        </div>
        <div>
          <p>비밀번호</p>
          <input id="input_pw" onChange={keyInput_pw}></input>
        </div>
        <div>
          <p>비밀번호 확인</p>
          <input id="input_pwcheck" onChange={keyInput_check}></input>
        </div>
        <div>
          <button className="sign_btn" onClick={join}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sign_form;
