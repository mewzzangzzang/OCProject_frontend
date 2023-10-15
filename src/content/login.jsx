import "./register.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { username, password } = user;

  const onSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/signin/", user);
    navigate("/");
  };

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
          <form className="formLogin" onSubmit={onSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <h4>N</h4>
              </a>
            </div>
            <span>or use your account</span>
            <div className="signBox">
              <input
                required
                type="text"
                id="username"
                value={username}
                onChange={onInputChange}
                name="username"
                placeholder="Name"
              />
              <input
                required
                id="password"
                value={password}
                onChange={onInputChange}
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
            {/* <a href="#">Forgot your password?</a> */}
            <button onClick={() => alert("🐟 로그인 완료 ")}>로그인</button>
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
}

export default Login;
