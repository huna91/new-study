import React from "react";
import { useSelector } from "react-redux";
const Board_tag = ({ idPick }) => {
  const boardData = useSelector((state) => state.boardData);
  return (
    <div className="board_tag_wrap">
      <div className="board_tag_top">
        <div className="board_tag_title">
          <h1>{boardData[idPick].title}</h1>
        </div>
        <div className="board_tag_writer">
          작성자 : {boardData[idPick].writer}
        </div>
        <div className="board_tag_date  ">{boardData[idPick].date}</div>
      </div>
      <div className="board_tag_bottom">
        <div className="board_tag_content">{boardData[idPick].content}</div>
      </div>
    </div>
  );
};

export default Board_tag;
