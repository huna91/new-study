import React, { useCallback, useState } from "react";
import ReactDOM from "react";

const Board_Write = ({
  loginID,
  islogin,
  bdTitle,
  setBdTitle,
  bdContents,
  setBdContents,
}) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const date = new Date();
  const [style, setStyle] = useState({ display: "none" });

  // 목록에 뿌려주기
  // function _write() {
  //   setA((a) => {
  //     a.push(
  //       bdTitle.map((value, index) => {
  //         // let _write = React.createElement("li", { className: "write_tag" }, e);
  //         <ul>
  //           <li key={index}>
  //             <div>제목 {value}</div>
  //             <div>작성자 {loginID}</div>
  //           </li>
  //         </ul>;
  //       })
  //     );
  //   });
  // }
  // 제목과 내용 저장하기
  const _title = useCallback((e) => {
    setTitle(e.target.value);
  }, []);
  const _contents = useCallback((e) => {
    setContents(e.target.value);
  }, []);
  const _bdTitle = useCallback(() => {
    setBdTitle([...bdTitle, title]);
    setBdContents([...bdContents, contents]);
    // _write();
  }, [setBdTitle, bdTitle, title, setBdContents, bdContents, contents]);

  const write_active = () => {
    style.display == "none"
      ? setStyle({ display: "block" })
      : setStyle({ display: "none" });
  };

  return (
    <div className="board_write">
      {/* 제목, 글쓴이, 날짜,시간 나오는곳 */}
      <div className="board_write_left">
        <h1>목록</h1>
        <div className="write_wrap">
          <div className="write_chart">
            <ul id="write_chart_tag">
              {bdTitle.map((value, index) => {
                <li key={index}>제목{value}</li>;
              })}
            </ul>
          </div>
          <div className="write_chart_btn">
            <button className="write_btn" onClick={write_active}>
              글쓰기
            </button>
          </div>
        </div>
      </div>
      {/* 왼쪽거 클릭하면 내용이랑 나오는 곳 */}
      <div className="board_write_right">
        <div className="board_write_active" style={style}>
          <div className="board_write_detail">
            <div className="board_write_right_title">
              <h1>제목</h1>
              <h1>글쓴이</h1>
              <h1>날짜</h1>
              <h1>내용</h1>
            </div>
            <div className="board_write_right_contents">
              <div>
                <input className="write_title" onChange={_title}></input>
              </div>
              <div>{islogin ? loginID : "로그인plz"}</div>
              <div>
                {date.getFullYear()}&nbsp;/&nbsp;
                {date.getMonth() + 1}&nbsp;/&nbsp;
                {date.getDate()}&nbsp;/&nbsp;
                {date.getHours()}:{date.getMinutes()}
              </div>
              <div className="write_text">
                <textarea
                  className="write_contents"
                  onChange={_contents}
                ></textarea>
              </div>
              <div className="write_result_btn">
                <button onClick={_bdTitle}>작성완료</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board_Write;
