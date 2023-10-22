import React, { useState } from "react";

// import Googlegeo from "./googlegeo";
// import Googletime from "./googletime";
import Navermap from "./navermap";
import { googleData } from "./fishData";
// 수출 페이지
const Page5 = () => {
  const [content, setContent] = useState("Map");

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  // 트렌드 페이지
  const selectComponent = {
    // Geo: <Googlegeo />,
    // Time: <Googletime />,
    Map: <Navermap />,
  };

  return (
    <div className="all mt-4">
      <h1>ㅤ</h1>
      {googleData.map((data) => (
        <button onClick={handleClickButton} name={data.name} key={data.key}>
          {data.text}
        </button>
      ))}

      {/* 선택한 컴포넌트 렌더링 */}
      {selectComponent[content]}
    </div>
  );
};

export default Page5;
