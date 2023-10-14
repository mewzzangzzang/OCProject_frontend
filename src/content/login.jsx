import React from "react";
import "./register.css";

const login = () => {
  return (
    <div class="container" id="container">
      <div class="form-container sign-in-container">
        <form className="formLogin" action="#">
          <h1>Sign in</h1>
          <div class="social-container">
            <a href="#" class="social">
              <i class="fab fa-facebook-f"></i>
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
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button class="ghost" id="signUp">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
