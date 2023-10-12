import React, { useEffect } from "react";

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
        trends.embed.renderExploreWidget("TIMESERIES", {
          "comparisonItem": [
            {"keyword": "광어", "geo": "KR", "time": "today 12-m"},
            {"keyword": "우럭", "geo": "KR", "time": "today 12-m"},
            {"keyword": "멍게", "geo": "KR", "time": "today 12-m"}
          ],
          "category": 0,
          "property": ""
        }, {
          "exploreQuery": "geo=KR&q=%EA%B4%91%EC%96%B4,%EC%9A%B0%EB%9F%AD,%EB%A9%8D%EA%B2%8C&hl=ko&date=today 12-m,today 12-m,today 12-m",
          "guestPath": "https://trends.google.co.kr:443/trends/embed/"
        });
      `;
      document.body.appendChild(embedScript);
    };
  }, []);

  return <div id="trends-widget" />;
};

export default GoogleTrendsWidget;
