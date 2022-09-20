import React, { Component } from "react";

/*
*** 생명주기***
: 작업을 수행하며 원하는 분기가 필요하다. 
: 생명주기는 그 분기에 맞게 작업을 컨트롤 할 수 있도록 한다.
ex) 만약 화면을 그려주는 시기와 state값이 변했을 때 같은 상황에 대한 작업들을
 컨트롤 할 수 있도록 리액트에서 지원핸 주는 함수들이 lifecycle 함수 이다.


*** 클래스 컴포넌트 ***
: 함수형과 비슷하게 생겼지만 클래스로 선언되었고 리액트에서 제공하는 Component라는
클래스를 상속받아 온다.

1. mounting : 그려주고 커모넌트가 시작될 때 처음 한번 실행

2. updating : state가 업데이트 되고 UI가 그려질때

3. upmounting : 컴포넌트가 화면에서 사라질때

4. UI 세팅 과정
 - constructure -> render -> dom 업데이트 -> componentDidMount
 - 이후 값이 변하면
 - componentDidUpdate(state가 변하면 업데이트 해주는 함수)
*/

export default class BlockClass extends Component {
  // constructor 함수는 lifecycle 함수중 하나인 생성자 함수임.
  // 컴포넌트가 생성되면 제일 처음으로 실행되는 함수
  constructor(props) {
    // super() : 자식 클래스가 생성될때 부모클래스의 생성자를 참조
    // react 클래스 컴포넌트의 부모 클래스는 react.Component 이다.
    // super를 사용하는 이유 : super 사용 전에는 constructor 안에서 this를
    // 사용할 수 없기 때문이다.
    // ( 결국 constructor 생성자 내부에서 this.props를 사용하려고 쓰는것임/)
    super(props);
    // 함수형에서는 useState함수를 썼지만 클래스 컴포넌트에서는 state값을
    // 객체로 사용한다. 이 state값이 변경되면 다시 리랜더링 된다.
    // 함수형을 클래스형으로 바꾸면 아래와 같이 된다.
    // ---------------------------------------------------------
    // let [num,setNum] = useState(0);
    // let [name,setName] = useState("hoho");
    this.state = {
      num: 0,
      name: "hoho",
    };
    // ---------------------------------------------------------
    console.log("constructor");
  }
  // UI 그려주고 나오는 함수
  componentDidMount() {
    // 여기서 주로 데이터 베이스 값을 가져온다.
    // componentDidMount 함수가 UI를 그려준 다음에 실행되는 함수이기 때문에
    // UI를 그리지 않고 데이터를 가져와도 넣어줄 곳이 없기때문
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    // 함수 컴포넌트에서는 useState() 함수 값이 비동기라고 했는데
    // 클래스 컴포넌트에서는 componentDidUpdate()함수에서 확인할 수 있다.
    // 이는 reder가 다시 실행되고 이 업데이트 함수가 실행된다는 의미이다.
    console.log(this.state);
    console.log("componentDidUpdate");
  }
  add = () => {
    // class 컴포넌트에서 state값을 변하게 하고 싶으면 setState() 함수를 이용해서 값을 수정한다.
    // setState 함수의 매개변수 안에 객체에서 바꾸고 싶은 키와 값을 넣어줌
    // this.setState({ num: this.state.num + 1 });
    // num, name도 바꾸고 싶으면 아래와 같이
    this.setState({ num: this.state.num + 1, name: "하요~" });
  };
  render() {
    console.log("render");
    return (
      <div>
        넘{this.state.num}
        네임{this.state.name}
        <button onClick={this.add}>바꾸깅</button>
        {/* 부모 컴포넌트에서 props 값을 받아서 사용해 보자 */}
        <div>{this.props.test}</div>
      </div>
    );
  }
}
