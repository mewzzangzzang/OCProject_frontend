import React from "react";
import "./register.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

// const {} = userData;

const onSubmit = async (e) => {
  e.preventDefault();
  await axios.post("http://localhost:8000/signupTest");
};

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
          <form className="formRegister" onSubmit={onSubmit}>
            <h2>Create Account</h2>
            <input name="username" type="text" placeholder="Name" />
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <input
              name="password2"
              type="password"
              placeholder="Confirm Password"
            />
            <button type="submit">회원가입</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <a href={`/Login`}>
                <button className="ghost" id="signIn">
                  로그인
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
