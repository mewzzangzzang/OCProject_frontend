import React, { Component } from "react";

class navermap extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=qp4yrgzgxf";
    script.async = true;
    script.onload = () => {
      const map = new window.naver.maps.Map("naver-map", {
        center: new window.naver.maps.LatLng(37.5666805, 126.9784147),
        zoom: 1,
      });

      // 여기에서 폴리곤을 추가하고 설정할 수 있습니다.
    };

    document.head.appendChild(script);
  }

  render() {
    return (
      <div style={{ width: "1400", height: "500" }}>
        <div id="naver-map" style={{ width: "100%", height: "100%" }}></div>
      </div>
    );
  }
}

export default navermap;
