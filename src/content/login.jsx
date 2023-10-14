import React from "react";
import "./register.css";

const login = () => {
  return (
    <div className="all mt-4">
      <div className="line spacing">
        <h1>ㅤ</h1>
        <h1>ㅤ</h1>
        <h1>ㅤ</h1>
        <h1>ㅤ</h1>
      </div>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form className="formLogin" action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <h4>N</h4>
              </a>
              {/* <a href="#" class="social">
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a href="#" class="social">
              <i class="fab fa-linkedin-in"></i>
            </a> */}
            </div>
            <span>or use your account</span>
            <div className="signBox">
              <input type="id" placeholder="id" />
              <input type="password" placeholder="Password" />
            </div>
            {/* <a href="#">Forgot your password?</a> */}
            <button>로그인</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <a href={`/Register`}>
                <button className="ghost" id="signUp">
                  회원가입
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
