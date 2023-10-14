import React from "react";
import "./register.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();

// const {} = userData;

const onSubmit = async (e) => {
  e.preventDefault();
  await axios.post("http://localhost:8080/signupTest");
};

const login = () => {
  return (
    <div class="container" id="container">
      <div class="form-container sign-in-container">
        <form className="formRegister" onSubmit={onSubmit}>
          <h1>Create Account</h1>
          <input name="username" type="text" placeholder="Name" />
          <input name="email" type="email" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <input
            name="password2"
            type="password"
            placeholder="Confirm Password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <button class="ghost" id="signIn">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
