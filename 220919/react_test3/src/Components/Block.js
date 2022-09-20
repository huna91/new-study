import React from "react";

const Block = (props) => {
  let { data, name, res } = props;
  let temp = "";
  if (name == "user") {
    temp = res;
  } else {
    // true : false 이렇게
    // res == "이겼다" ? '졌다':'이겼다'
    temp = res == "비겼다" ? "비겼다" : res == "이겼다" ? "졌다" : "이겼다";
  }
  //   console.log(user);
  return (
    <div className="block">
      {/* 선택한 이미지를 props값으로 받아온다. 부모컴포넌트에서 */}
      {/* && 구문: 값이 있을때 그려라 라는 의미이다.(여기서 user에 값이 없으면 오류를 뱉어낸다.) */}
      <h1>{name}</h1>
      <img src={data && data.img}></img>
      <div>{temp}</div>
    </div>
  );
};

export default Block;
