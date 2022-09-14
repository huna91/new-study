import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
setInterval(() => {
  root.render(
    // React.StrictMode는 오류나 로그를 띄워주는 태그로 엄격모드 같은 것이라 생각하면 되고 이 태그는 지워도 된다.
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
  );
}, 1000);
// root2.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
