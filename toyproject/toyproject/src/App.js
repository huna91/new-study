import { Main, Login, Board, Mypage, Sign, Cloud } from "./page";
import { useCallback, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  // 회원가입 데이터
  let sign = {
    num: 0,
    userId: "",
    userPw: "",
  };
  let user = function (num, userId, userPw) {
    this.num = num;
    this.userId = userId;
    this.userPw = userPw;
  };
  // let userData = [];
  const [userData, setUsrData] = useState([]);
  const onSignin = () => {
    let data = new user(sign.num, sign.userId, sign.userPw);
    setUsrData([...userData, data]);
    sign.num += 1;
  };

  // 로그인 데이터
  const navi = useNavigate();
  const [islogin, setisLogin] = useState();

  const activeLogin = () => {
    let checkID = userData.some((user) => user.userId == loginID);
    let checkPW = userData.some((user) => user.userPw == loginPW);

    if (checkID == true && checkPW == true) {
      setisLogin(true);
      if (islogin == true) {
        navi("/");
      }
    }
  };
  const [loginID, setLoginID] = useState();
  const [loginPW, setLoginPW] = useState();

  // 게시판 데이터
  const [bdTitle, setBdTitle] = useState([]);
  const [bdContents, setBdContents] = useState([]);

  // 로그인 해야 이용 가능
  const Redirect_mypage = () => {
    return islogin == true ? <Mypage /> : <Navigate to="/" />;
  };
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Main islogin={islogin} setisLogin={setisLogin} loginID={loginID} />
          }
        />
        <Route
          path="/sign"
          element={
            <Sign
              sign={sign}
              onSignin={onSignin}
              setisLogin={setisLogin}
              loginID={loginID}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              setisLogin={setisLogin}
              islogin={islogin}
              setLoginID={setLoginID}
              setLoginPW={setLoginPW}
              userData={userData}
              activeLogin={activeLogin}
            />
          }
        />
        <Route
          path="/board"
          element={
            <Board
              setisLogin={setisLogin}
              loginID={loginID}
              islogin={islogin}
              bdTitle={bdTitle}
              setBdTitle={setBdTitle}
              bdContents={bdContents}
              setBdContents={setBdContents}
            />
          }
        />
        <Route
          path="/cloud"
          element={
            <Cloud
              setisLogin={setisLogin}
              loginID={loginID}
              islogin={islogin}
            />
          }
        />
        <Route
          path="/mypage"
          element={
            <Redirect_mypage
              setisLogin={setisLogin}
              loginID={loginID}
              islogin={islogin}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
