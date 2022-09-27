import { React, useEffect, useState } from "react";

const Main_text = () => {
  const content = "찾는다... 흡연구역...";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + content[count]
          : content[0];
        setCount(count + 1);

        if (count >= content.length) {
          setCount(0);
          setText("");
        }

        return result;
      });
    }, 500);

    return () => {
      clearInterval(typingInterval);
    };
  });
  return (
    <div className="intro">
      <h1 className="text">{text}</h1>
    </div>
  );
};

export default Main_text;
