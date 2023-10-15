import React, { useEffect } from "react";

const GoogleTrendsWidgetTimeSeries = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://ssl.gstatic.com/trends_nrtr/3461_RC01/embed_loader.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const embedScript = document.createElement("script");
      embedScript.innerHTML = `
      trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"광어","geo":"KR","time":"2022-10-15 2023-10-15"},{"keyword":"우럭","geo":"KR","time":"2022-10-15 2023-10-15"}],"category":0,"property":""}, {"exploreQuery":"geo=KR&q=%EA%B4%91%EC%96%B4,%EC%9A%B0%EB%9F%AD&hl=ko&date=today 12-m,today 12-m","guestPath":"https://trends.google.co.kr:443/trends/embed/"});

      `;

      document.body.appendChild(embedScript);
    };
  }, []);

  const widgetStyle = {
    width: "300px", // 원하는 너비
    height: "200px", // 원하는 높이
  };

  return <div id="trends-widget" style={widgetStyle} />;
};

export default GoogleTrendsWidgetTimeSeries;
