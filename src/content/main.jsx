import React, { useState } from "react";
import "./main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import RechartPrediction from "./RechartPrediction";
import TableauPrediction from "./TableauPrediction";
import { predictionData } from "./fishData";

const Main = () => {
  const [content, setContent] = useState("Rechart");

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  // 그래프 종류
  const selectComponent = {
    Rechart: <RechartPrediction />,
    Tableau: <TableauPrediction />,
  };
  const filePath = process.env.PUBLIC_URL + "/2023_2024_flatPred.xlsx";

  return (
    <div className="all mt-4 ">
      <h1>MAIN</h1>
      {/* <div className="menu2 p-4 mt-5"></div> 메인 큰 네모 박스 */}
      {predictionData.map((data) => (
        <button onClick={handleClickButton} name={data.name} key={data.key}>
          {data.text}
        </button>
      ))}
      <div className="down">
        <a href={filePath} download="./2023_2024_flatPred.xlsx">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-file-earmark-arrow-down  "
            viewBox="0 0 16 16"
          >
            <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z" />
            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
          </svg>
        </a>
      </div>
      <h1>ㅤ</h1>
      {/* 선택한 컴포넌트 렌더링 */}
      {selectComponent[content]}
    </div>
  );
};

export default Main;
