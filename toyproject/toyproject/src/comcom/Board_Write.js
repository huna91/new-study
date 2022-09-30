import React, { useCallback, useState } from "react";
import ReactDOM from "react";
import { useDispatch, useSelector } from "react-redux";
import Board_tag from "../comcomcom/Board_tag";

const Board_Write = ({
  loginID,

  bdTitle,
  setBdTitle,
  bdContents,
  setBdContents,
}) => {
  const isLogin = useSelector((state) => state.loginData);
  const boardData = useSelector((state) => state.boardData);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const _date = new Date();
  let date = `${_date.getFullYear()} / ${
    _date.getMonth() + 1
  } / ${_date.getDate()} / ${_date.getHours()} : ${_date.getMinutes()}`;
  const [style, setStyle] = useState({ display: "none" });
  const [style_tag, setStyle_tag] = useState({ display: "none" });

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
  // const _bdTitle = useCallback(() => {
  //   setBdTitle([...bdTitle, title]);
  //   setBdContents([...bdContents, contents]);
  //   // _write();
  // }, [setBdTitle, bdTitle, title, setBdContents, bdContents, contents]);

  const write_active = () => {
    style.display == "none"
      ? setStyle({ display: "block" })
      : setStyle({ display: "none" });
    setStyle_tag({ display: "none" });
  };
  const write_end = () => {
    dispatch({
      type: "write",
      payload: {
        id: count,
        title: title,
        writer: isLogin.loginId,
        date: date,
        content: contents,
      },
    });
    setCount(count + 1);
    setStyle({ display: "none" });
  };
  const [idPick, setIdPick] = useState(0);
  const tag_active = (e) => {
    // console.log(e.target.innerHTML);
    boardData.find((value) => {
      if (value.title == e.target.innerHTML) {
        setIdPick(value.id);
      }
    });
    style.display == "none"
      ? setStyle_tag({ display: "block" })
      : setStyle_tag({ display: "none" });
    setStyle({ display: "none" });
  };

  return (
    <div className="board_write">
      {/* 제목, 글쓴이, 날짜,시간 나오는곳 */}
      <div className="board_write_left">
        <h1>목록</h1>
        <div className="write_wrap">
          <div className="write_chart">
            <ul id="write_chart_tag">
              {boardData.map((value, index) => {
                return (
                  <li className="tag" key={index} onClick={tag_active}>
                    <a>
                      <span>
                        <h1>{value.title}</h1>
                      </span>
                      <div className="controll">
                        {" "}
                        &nbsp; 작성자: {value.writer} &nbsp;,&nbsp; 작성일:{" "}
                        {value.date}
                      </div>
                    </a>
                  </li>
                );
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
        <div className="board_tag_active" style={style_tag}>
          <Board_tag idPick={idPick} />
        </div>
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
              <div>{isLogin.activeLogin ? isLogin.loginId : "로그인plz"}</div>
              <div>{date}</div>
              <div className="write_text">
                <textarea
                  className="write_contents"
                  onChange={_contents}
                ></textarea>
              </div>
              <div className="write_result_btn">
                <button onClick={write_end}>작성완료</button>
              </div>
            </div>
            <button className="x_btn" onClick={write_active}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board_Write;
