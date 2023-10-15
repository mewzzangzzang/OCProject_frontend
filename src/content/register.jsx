import "./register.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { getCookie } from "your-cookie-util"; // 이곳에 실제로 사용하는 쿠키 관련 유틸리티의 경로를 넣으세요.
// const csrf_token = getCookie("csrftoken"); // 쿠키 유틸리티를 사용해서 csrf 토큰을 가져옵니다.

// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

// const {} = userData;

// function textInput() {
//   var getUsername = document.getElementById("username").value;
//   var getEmail = document.getElementById("email").value;
//   var getPassword = document.getElementById("password").value;
//   var getPassword2 = document.getElementById("password2").value;
//   axios
//     .post("http://127.0.0.1:8000/signupTest/", {
//       username: getUsername,
//       email: getEmail,
//     })
//     .then(function (response) {
//       console.log(response);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   <Link to="/notice"></Link>;
// }

function Register() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const { username, email, password, password2 } = user;

  // const csrf_token = document.getElementsByName("csrfmiddlewaretoken")[0].value;

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/signupTest", user, {
      headers: {
        // "X-CSRFToken": csrf_token,
      },
    });
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
}

export default Register;
