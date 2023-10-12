// 수입 페이지
import React, { useState } from "react";
import ImportFlatfish from "./importFlatfish";
import ImportRockfish from "./importRockfish";
import { fishData } from "./fishData";
const Page3 = () => {
  const [content, setContent] = useState("Rockfish");

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  // 어종
  const selectComponent = {
    Rockfish: <ImportRockfish />,
    Flatfish: <ImportFlatfish />,
  };

  return (
    <div className="all" mt-4>
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

export default Page3;
