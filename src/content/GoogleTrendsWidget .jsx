import React, { useEffect } from "react";
import "./Google.css";

const GoogleTrendsWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://ssl.gstatic.com/trends_nrtr/3461_RC01/embed_loader.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const embedScript = document.createElement("script");
      embedScript.innerHTML = `
      trends.embed.renderExploreWidget("GEO_MAP", {"comparisonItem":[{"keyword":"광어","geo":"KR","time":"today 1-m"},{"keyword":"우럭","geo":"KR","time":"today 1-m"}],"category":0,"property":""}, {"exploreQuery":"date=today%201-m&geo=KR&q=%EA%B4%91%EC%96%B4,%EC%9A%B0%EB%9F%AD&hl=ko","guestPath":"https://trends.google.co.kr:443/trends/embed/"});
      `;
      document.body.appendChild(embedScript);
    };
  }, []);

  return <div id="trends-widget" />;
};

export default GoogleTrendsWidget;
