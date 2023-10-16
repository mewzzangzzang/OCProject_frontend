import React, { useEffect, PureComponent } from "react";
import { NaverMap } from "react-naver-maps";
import "./chart2.css";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const sizedata = [
  {
    name: "관심도(100)",
    전북: 54,
    울산: 57,
    제주도: 62,
  },
  {
    name: "울산",
    광어: 43,
    우럭: 57,
  },
  {
    name: "전북",
    광어: 46,
    우럭: 54,
  },
  {
    name: "제주도",
    광어: 38,
    우럭: 62,
  },
];
const MapWithCircle = () => {
  useEffect(() => {
    // 네이버 지도 API 스크립트를 동적으로 로드
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=qp4yrgzgxf";
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
  }, []);

  const initMap = () => {
    const map = new window.naver.maps.Map("map", {
      center: new window.naver.maps.LatLng(35.9166102, 127.2783881),
      zoom: 7,
    });

    const circle1 = new window.naver.maps.Circle({
      map: map,
      center: new window.naver.maps.LatLng(
        33.33563837131329,
        126.61589378943937
      ),
      radius: 40000, // 반경 (미터)
      fillColor: "#6B8F1E", // 채우기 색상
      fillOpacity: 0.3, // 채우기 투명도
      strokeColor: "#6B8F1E", // 테두리 색상
      strokeOpacity: 0.8, // 테두리 투명도
      strokeWeight: 2, // 테두리 두께
    });

    const circle2 = new window.naver.maps.Circle({
      map: map,
      center: new window.naver.maps.LatLng(
        35.83563837131329,
        127.14789378943937
      ),
      radius: 50000, // 반경 (미터)
      fillColor: "#6B8F1E", // 채우기 색상
      fillOpacity: 0.3, // 채우기 투명도
      strokeColor: "#6B8F1E", // 테두리 색상
      strokeOpacity: 0.8, // 테두리 투명도
      strokeWeight: 2, // 테두리 두께
    });

    const circle3 = new window.naver.maps.Circle({
      map: map,
      center: new window.naver.maps.LatLng(
        35.53563837131329,
        129.34789378943937
      ),
      radius: 30000, // 반경 (미터)
      fillColor: "#6B8F1E", // 채우기 색상
      fillOpacity: 0.3, // 채우기 투명도
      strokeColor: "#6B8F1E", // 테두리 색상
      strokeOpacity: 0.8, // 테두리 투명도
      strokeWeight: 2, // 테두리 두께
    });
  };

  return (
    <div className="all mt-4">
      <h1>ㅤ</h1>
      <h3>우럭에 대한 관심도 밀집지역</h3>
      <div className="mapChart">
        <div id="map" style={{ width: "1500px", height: "600px" }}></div>
      </div>
      <div className="sizebarchart">
        <div className="title">지역별 우럭 관심도</div>
        <BarChart
          width={1500}
          height={200}
          data={sizedata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} ticks={[0, 50, 100]} tickCount={3} />
          <Tooltip />
          <Legend align="center" margin={{ left: 100 }} />
          <Bar dataKey="전북" fill="#8884d8" />
          <Bar dataKey="울산" fill="#8884d8" />
          <Bar dataKey="제주도" fill="#8884d8" />
          <Bar dataKey="광어" fill="#B7DFFF" />
          <Bar dataKey="우럭" fill="#F6DB96" />
        </BarChart>
      </div>
    </div>
  );
};

export default MapWithCircle;
