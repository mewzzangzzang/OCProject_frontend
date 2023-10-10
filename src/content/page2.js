// 테스트 2번 페이지
import React, { useState } from "react";
import Chart2 from "./chart2";
import Chart3 from "./chart3";
import { fishData } from "./fishData";

const Page2 = () => {
  const [content, setContent] = useState(""); // useState를 함수 컴포넌트 내부에서 호출

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  // 어종
  const selectComponent = {
    Rockfish: <Chart2 />,
    Flatfish: <Chart3 />,
  };

  return (
    <div className="all mt-4">
      {fishData.map((data) => (
        <button onClick={handleClickButton} name={data.name} key={data.key}>
          {data.text}
        </button>
      ))}

      {/* 선택한 컴포넌트 렌더링 */}
      {selectComponent[content]}
    </div>
  );
};

export default Page2;
