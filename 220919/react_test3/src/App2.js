import "./App2.css";
import { img01, img02, img03 } from "./images";
import Block from "./Components/Block";
import { useState } from "react";

const App2 = () => {
  // 가위바위보
  // 플레이어 영역, 컴퓨터 영역,
  // 플레이어가 선택한 이미지가 플레이어 영역에 보이고
  // 컴퓨터는 랜덤한 값을 이용해서 가위바위보 이미지 보이게
  const select = {
    scissors: {
      name: "가위",
      img: img01,
    },
    rock: {
      name: "바위",
      img: img02,
    },
    paper: {
      name: "보",
      img: img03,
    },
  };

  //   let a =['scissors','rock','paper']
  // 유저가 선택한 값을 담고 주시해야 함.
  // 선택하면 데이터가 바뀌어서 다시 그려줘야 하기 때문에(이미지가 변해야 함)
  // 유저의 선택한 값을 담을 useState(초기값 없으니 null)
  const [userSelect, setUserSelect] = useState(null);
  // 컴퓨터의 석택 값을 담을 useState
  const [comSelect, setComSelect] = useState(null);
  // 승패 결과를 담아 줄 useState
  const [result, setResult] = useState(null);

  // 컴퓨터는 버튼이 필요 없고 유저가 선택하면 자동으로 골라져야함
  // Math.random을 통한 랜덤값을 가져와 select와 매칭한다.
  // 객체에서 키값만 뽑아서 배열로 만들좌

  function userClick(temp) {
    // 유저
    // console.log(temp);
    setUserSelect(select[temp]);

    // 컴퓨터
    // => Object.keys를 이용해 select에서 키값만 배열로 받는다.
    let arr = Object.keys(select);
    // console.log(arr);
    let comRandom = Math.floor(Math.random() * 3);
    // arr[comRandom] 랜덤한 select의 키값을 뽑음
    setComSelect(select[arr[comRandom]]);
    // console.log(comSelect);
    // 유저 승패
    let player = select[temp];
    let computer = select[arr[comRandom]];
    if (player.name == computer.name) {
      setResult("비겼다");
      console.log("비겼다");
    } else if (player.name == "가위") {
      let temp = computer.name == "보" ? "이겼다" : "졌다";
      setResult(temp);
      console.log(temp);
    } else if (player.name == "바위") {
      let temp = computer.name == "가위" ? "이겼다" : "졌다";
      setResult(temp);
      console.log(temp);
    } else if (player.name == "보") {
      let temp = computer.name == "바위" ? "이겼다" : "졌다";
      setResult(temp);
      console.log(temp);
    }
  }

  /*
  1. 만들어 놓은 객체의 값이 필요하기 때문에 userClick 함수를 만들었고,
  2. 그 값을 저장해주는 userSelect 변수를 useState함수를 통해 만들어줬음
  3. 버튼을 클릭했을때 함수가 실행이 되고 state 값이 변하기 때문에 다시 리랜더링 된다.
  ( 부모가 리랜더링 됬으니 자식 컴포넌트도 리랜더링 된다. )
  4. Block에 userClick을 실행하게 되면 setUserSelect함수로 변경한 userSelect값을 props로 넘겨준다.
  5. Block에서는 props로 넘겨받은 값을 사용해서 img
  */
  return (
    <div>
      <div className="App2">
        <div className="user">
          <Block data={userSelect} name="user" res={result} />
        </div>
        <div className="computer">
          <Block data={comSelect} name="com" res={result} />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            userClick("scissors");
          }}
        >
          가위
        </button>
        <button
          onClick={() => {
            userClick("rock");
          }}
        >
          바위
        </button>
        <button
          onClick={() => {
            userClick("paper");
          }}
        >
          보
        </button>
      </div>
    </div>
  );
};

export default App2;
