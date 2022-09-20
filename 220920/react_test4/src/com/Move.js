import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Move = ({ path, name }) => {
  // useNavigate : 페이지 이동을 도와주는 함수

  const nav = useNavigate();
  return (
    <div className="move">
      <Link to={path}>페이지 이동</Link>
      <button
        onClick={() => {
          nav(path);
        }}
      >
        {name}로 이동
      </button>
    </div>
  );
};

export default Move;
