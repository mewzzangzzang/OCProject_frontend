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
      ))}
      <h1>ㅤ</h1>

      {selectComponent[content]}
    </div>
  );
};

export default Price;
