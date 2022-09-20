import React, { useEffect, useState } from "react";

const BlockFn = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  // 함수형에서 생명주기 관리하는 방법 : useEffect 함수사용
  useEffect(() => {
    // 여기서 생명주기 관리 (리액트 훅) useEffct는  componentDidMount라고 보면 된다.
    // 데이터 불러와서 UI에 뿌려줄때 요기서 진행
    // useEffect는
    console.log(num + "  useEffect 사용");
    // 아래 배열은 주시하는 값을 주어 componentDidUpdate로 사용하는 방법
  }, [num]);
  useEffect(() => {
    // useEffect함수는
    console.log(num);
    console.log(num2);
  }, [num, num2]);
  const add = () => {
    setNum(num + 1);
    console.log(num);
  };
  return (
    <div>
      <div>{num}</div>
      <button onClick={add}>더하깅</button>
    </div>
  );
};

export default BlockFn;
