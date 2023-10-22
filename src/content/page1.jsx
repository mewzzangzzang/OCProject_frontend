// 산지가격 페이지

// 2022 실제값, 예측 차트
import { render } from "@testing-library/react";
import React, { useState } from "react";
import "./chart2.css";
import { rechartYear } from "./fishData";
import MainChartYearRechart from "./mainChartYearRechart";
import Price2018 from "./price2018";
import Price2019 from "./price2019";
import Price2020 from "./price2020";
import Price2021 from "./price2021";
import Price2022 from "./price2022";

const Price = () => {
  const [content, setContent] = useState("Year");

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    Year: <MainChartYearRechart />,
    Y2018: <Price2018 />,
    Y2019: <Price2019 />,
    Y2020: <Price2020 />,
    Y2021: <Price2021 />,
    Y2022: <Price2022 />,
  };

  return (
    <div className="all mt-4">
      <h1>ㅤ</h1>
      {rechartYear.map((data) => (
        <button onClick={handleClickButton} name={data.name} key={data.key}>
          {data.text}
        </button>
      ))}{" "}
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
      <h1>ㅤ</h1>
      {selectComponent[content]}
    </div>
  );
};

export default Price;
