// App.css 가져온 구문
import "./App.css";
import Mycom from "./components/Mycom";
import Time from "./components/Time";

function App() {
  return (
    <div className="App">
      <Time />
      <div className="week week_back">
        <Mycom day="일" cName="tap sun" />
        <Mycom day="월" cName="tap just" />
        <Mycom day="화" cName="tap just" />
        <Mycom day="수" cName="tap just" />
        <Mycom day="목" cName="tap just" />
        <Mycom day="금" cName="tap just" />
        <Mycom day="토" cName="tap sat" />
      </div>
      <div className="week">
        <Mycom day="28" cName="sun nMonth" tName="text" />
        <Mycom day="29" cName="just nMonth" tName="text" />
        <Mycom day="30" cName="just nMonth" tName="text" />
        <Mycom day="31" cName="just" tName="text" />
        <Mycom day="1" cName="just" tName="text" />
        <Mycom day="2" cName="just" tName="text" />
        <Mycom day="3" cName="sat" tName="text" />
      </div>
      <div className="week">
        <Mycom day="4" cName="sun" tName="text" />
        <Mycom day="5" cName="just" tName="text" />
        <Mycom day="6" cName="just" tName="text" />
        <Mycom day="7" cName="just" tName="text" />
        <Mycom day="8" cName="just" tName="text" />
        <Mycom day="9" cName="just" tName="text" />
        <Mycom day="10" cName="sat" tName="text" />
      </div>
      <div className="week">
        <Mycom day="11" cName="sun" tName="text" />
        <Mycom day="12" cName="just" tName="text" />
        <Mycom day="13" cName="just" tName="text" />
        <Mycom day="14" cName="just" tName="text" />
        <Mycom day="15" cName="just" tName="text" />
        <Mycom day="16" cName="just" tName="text" />
        <Mycom day="17" cName="sat" tName="text" />
      </div>
      <div className="week">
        <Mycom day="18" cName="sun" tName="text" />
        <Mycom day="19" cName="just" tName="text" />
        <Mycom day="20" cName="just" tName="text" />
        <Mycom day="21" cName="just" tName="text" />
        <Mycom day="22" cName="just" tName="text" />
        <Mycom day="23" cName="just" tName="text" />
        <Mycom day="24" cName="sat" tName="text" />
      </div>
      <div className="week">
        <Mycom day="25" cName="sun" tName="text" />
        <Mycom day="26" cName="just" tName="text" />
        <Mycom day="27" cName="just" tName="text" />
        <Mycom day="28" cName="just" tName="text" />
        <Mycom day="29" cName="just" tName="text" />
        <Mycom day="30" cName="just" tName="text" />
        <Mycom day="1" cName="just nMonth" tName="text" />
      </div>
    </div>
  );
}

export default App;
