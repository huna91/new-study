import React from "react";
import Move from "./Move";

const Body = ({ path, name, item }) => {
  // Link : 리액트에서 a태그 같은 역할을 한다.
  // Link 컴포넌트를 이용해서 경로를 바꿔주고 컴포넌트를 교체해서 보여줄 수 있다.
  // => 라우터간 이동을 할 수 있게 도와줌
  // Link에 필요한 props는 to 이다.
  // to 이름의 props에 이동할 경로를 넣어준다.
  return (
    <div className="body">
      <Move path={path} name={name} />
      {item && item.id ? <div>{item.id}번 상품</div> : null}
      {item && item.num ? <div>{item.num}개</div> : null}
      {item && item.name ? <div>상품명 : {item.name}</div> : null}
    </div>
  );
};

export default Body;
