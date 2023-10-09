import React from "react";
import "./login.css";

import { Link } from "react-router-dom";

const login = () => {
  return (
    <div>
      <div className="Frame38">
        <div>
          <div className="Rectangle5" />
          <div>로그인</div>
        </div>
        <div className="Frame44">
          <div className="Logout">
            <div className="Vector-1"></div>
            <div className="Vector-2"></div>
          </div>
          <div className="Logout">Logout</div>
        </div>
        <div className="Rectangle3"></div>
        <div className="Frame45" />
        <div className="Rectangle4"></div>
        <div className="Username">username</div>
        <div className="Password">password</div>
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

export default login;
