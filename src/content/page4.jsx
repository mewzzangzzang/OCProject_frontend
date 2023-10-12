import React, { useState } from "react";
import { fishData } from "./fishData";

import ExportFlatfish from "./exportFlatfish";
import ExportRockfish from "./exportRockfish";
// 수출 페이지
const Page4 = () => {
  const [content, setContent] = useState("Rockfish");

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  // 어종
  const selectComponent = {
    Rockfish: <ExportRockfish />,
    Flatfish: <ExportFlatfish />,
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

export default Page4;
