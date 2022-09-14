import React from "react";
/* 
*** 컴포넌트로 작업을 하면 좋은점 ***
- 원하는 내용을 태그화해서 사용할 수 있다.
- 코드의 재활용성이 용이하다.
- 유지보수도 편하다.
*/
// 리액트의 데이터 구조는 위에서 아래로(단방향)
// ->여기서는 index.js에서 App.js를 부르고 Mycom.js를 부름
// 여기서 받은 num 매개변수의 명칭은 props라고 부른다.
// 부모에서 받은 컴포넌트 데이터를 매개변수로 받은 것이다.(단방향[부모->자식])
const Mycom = (num) => {
  //   console.log(num);
  const dday = new Date();
  const { day, cName, tName } = num;
  if (dday.getDate() === Number(day)) {
    return (
      <div className={cName + " com"}>
        <div className=" dday"></div>
        <h1 className={tName}>{day}</h1>
      </div>
    );
  } else {
    return (
      // 태그에 클래스를 줄때는 className으로 줘야한다.
      <div className={cName + " com"}>
        <h1 className={tName}>{day}</h1>
      </div>
    );
  }
};
// default : 하나만 내보낸다.
export default Mycom;
