import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const main = () => {
  return (
    <div className="all mt-4 ">
      <div className="menu2Div">
        {/* <div className="search p-4 mt-5 shadow"></div> search */}
        <div className="menu2 p-4 mt-5">
          <div className="datachartlist"></div> {/*menu2*/}
          <div className="datachart m-4 shadow">
            <h1 className="data">1000000원</h1>
            <h3 className="datatitle">수출량</h3>
          </div>
          <div className="datachart m-4 shadow"></div>
          <div className="datachart m-4 shadow"></div>
          <div className="datachart m-4 shadow"></div>
        </div>
      </div>

      {/* <div className="chartFrame">
        <iframe
          src="https://public.tableau.com/views/_16958031177070/1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true"
          width="40%"
          height="500"
          title="홍합"
        />
      </div> */}
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default main;
