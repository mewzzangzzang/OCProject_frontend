import "./register.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [csrf_token, setCsrfToken] = useState("");

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { username, email, password, password2 } = user;

  useEffect(() => {
    // CSRF 토큰을 가져오는 요청
    axios
      .get("http://127.0.0.1:8000/csrf_token/")
      .then((response) => {
        const csrf_token = response.data.csrf_token;
        setCsrfToken(csrf_token);
        // 이제 csrf_token을 사용하여 요청을 보낼 수 있습니다.
      })
      .catch((error) => {
        console.error("Error fetching CSRF token:", error);
      });
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

  const onSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/signupTest/", user, {
      headers: {
        Accept: "application/json",
        "X-CSRFToken": csrf_token,
        "Content-Type": "application/json",
      },
    });
    navigate("/login");
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
          <form className="formRegister" onSubmit={onSubmit}>
            <h2>Create Account</h2>
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
              id="email"
              value={email}
              name="email"
              type="email"
              onChange={onInputChange}
              placeholder="Email"
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
            <input
              required
              id="password2"
              value={password2}
              onChange={onInputChange}
              name="password2"
              type="password"
              placeholder="Confirm Password"
            />
            <button
              type="submit"
              onClick={() => alert("🐟 가입 완료! 환영합니다 ")}
            >
              회원가입
            </button>
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
}

export default Register;
