import React from "react";
import { Header, Body } from "../com";

const Main = () => {
  return (
    <div>
      <Header title="메인페이지" />
      <Body path="/login" name="로그인페이지" />
    </div>
  );
};

export default Main;
