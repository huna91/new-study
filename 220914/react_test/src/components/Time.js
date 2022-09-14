import React from "react";

const Time = () => {
  const dayTime = new Date();
  return (
    <div className="tTime">
      <h1 className="Month">9월</h1>
      <div className="tTime2">
        <h1>{dayTime.getHours() + ": "}</h1>
        <h1>{dayTime.getMinutes() + ":"}</h1>
        <h1>{dayTime.getSeconds()}</h1>
      </div>
    </div>
  );
};

export default Time;
