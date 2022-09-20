import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Main, Login, Shop, Detail } from "./page";

function App() {
  // Routers : 페이지를 스위치 해주는 역할
  // -> 버전이 업되면서 Routers로 이름이 바뀌었고, 이전에는 Switch 이름이였음.

  // Route: 페이지들을 정의한다.
  // Route에는 porps 값이 path와 element 이렇게 두개 필요하다.
  // path: 보여줄 컴포넌트들을 보여줄 경로
  // element: path에 해당되는 경로에서 보여줄 컴포넌트

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail/:id/:num/:name" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
