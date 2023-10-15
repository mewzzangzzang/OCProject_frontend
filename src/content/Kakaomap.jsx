import React, { useEffect } from 'react';
import { Map, Clusterer, Marker } from 'kakao';
p
function MapWithCluster() {
  useEffect(() => {
    // Kakao 지도 API 키를 가져옵니다.
    const apiKey = process.env.REACT_APP_KAKAO_MAPS_API_KEY;

    // Kakao 지도 초기화 및 설정
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(37.566826, 126.978656), // 서울의 좌표
      level: 5, // 줌 레벨
    };

    // API 키를 사용하여 Kakao 지도를 초기화합니다.
    window.kakao.maps.load(() => {
      const map = new window.kakao.maps.Map(container, options);
      const clusterer = new window.kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10,
      });

      // 예시 데이터로 마커 생성 및 클러스터에 추가
      const markers = [
        { lat: 37.566826, lng: 126.978656 },
        // 다른 마커들 추가
      ];

      markers.forEach(({ lat, lng }) => {
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(lat, lng),
        });
        clusterer.addMarker(marker);
      });
    });
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }}></div>;
}

export default MapWithCluster;
