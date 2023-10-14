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
    // Tableau: <TableauPrediction />,
  };

  return (
    <div className="all mt-4 ">
      <h1>MAIN</h1>
      {/* <div className="menu2 p-4 mt-5"></div> 메인 큰 네모 박스 */}
      {predictionData.map((data) => (
        <button onClick={handleClickButton} name={data.name} key={data.key}>
          {data.text}
        </button>
      ))}
      <h1>ㅤ</h1>
      {/* 선택한 컴포넌트 렌더링 */}
      {selectComponent[content]}
    </div>
  );
};

export default Main;
