import React from "react";
import "./main.css";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const main = () => {
  return (
    <div className="all mt-4 ">
      <div className="menu1Div">
        <div className="menu p-4 mt-1 m-5">
          <div className="icon pt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="currentColor"
              class="bi bi-graph-up-arrow"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
              />
            </svg>
          </div>

          <h1 className="title p-3">TEST</h1>

          <h3 className="menulist pt-5">
            <Link to={`/Chart`}>테스트 1번</Link>
          </h3>
          <h3 className="menulist pt-5">
            <Link to={`/Chart`}>테스트 2번</Link>
          </h3>
          <h3 className="menulist pt-5">
            <Link to={`/Chart`}>테스트 3번</Link>
          </h3>
          <h3 className="menulist pt-5">
            <Link to={`/Chart`}>테스트 4번</Link>
          </h3>
        </div>
        {/*menu*/}
      </div>
      <div className="menu2Div">
        <div className="search p-4 mt-5 shadow"></div> {/*search*/}
        <div className="menu2 p-4 mt-4">
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

      <div className="chartFrame">
        <iframe
          src="https://public.tableau.com/views/_16958031177070/1?:language=ko-KR&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true"
          width="40%"
          height="500"
          title="홍합"
        />
      </div>
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
