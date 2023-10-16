import React, { Component } from "react";

class NaverMapComponent extends Component {
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

      const polygon = new window.naver.maps.Polygon({
        map: map,
        paths: [
          new window.naver.maps.LatLng(37.37544345085402, 127.11224555969238),
          new window.naver.maps.LatLng(37.37230584065902, 127.10791110992432),
          new window.naver.maps.LatLng(37.35975408751081, 127.10795402526855),
          new window.naver.maps.LatLng(37.359924641705476, 127.11576461791992),
          new window.naver.maps.LatLng(37.35931064479073, 127.12211608886719),
          new window.naver.maps.LatLng(37.36043630196386, 127.12293148040771),
          new window.naver.maps.LatLng(37.36354029942161, 127.12310314178465),
          new window.naver.maps.LatLng(37.365211629488016, 127.12456226348876),
        ],
        fillColor: "#ff0000",
        fillOpacity: 0.3,
        strokeColor: "#ff0000",
        strokeOpacity: 0.6,
        strokeWeight: 3,
      });

      const polyline = new window.naver.maps.Polyline({
        map: map,
        path: [
          new window.naver.maps.LatLng(37.359924641705476, 127.1148204803467),
          new window.naver.maps.LatLng(37.36343797188166, 127.11486339569092),
          new window.naver.maps.LatLng(37.368520071054576, 127.11473464965819),
          new window.naver.maps.LatLng(37.3685882848096, 127.1088123321533),
          new window.naver.maps.LatLng(37.37295383612657, 127.10876941680907),
          new window.naver.maps.LatLng(37.38001321351567, 127.11851119995116),
          new window.naver.maps.LatLng(37.378546827477855, 127.11984157562254),
          new window.naver.maps.LatLng(37.376637072444105, 127.12052822113036),
          new window.naver.maps.LatLng(37.37530703574853, 127.12190151214598),
          new window.naver.maps.LatLng(37.371657839593894, 127.11645126342773),
          new window.naver.maps.LatLng(37.36855417793982, 127.1207857131958),
        ],
      });
    };
    document.head.appendChild(script);
  }

  render() {
    return (
      <div className="all mt-4">
        <h1>ㅤ</h1>
        <div className="mapChart mt-4">
          <div style={{ width: "1500px", height: "800px" }}>
            <div id="naver-map" style={{ width: "100%", height: "100%" }}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default NaverMapComponent;
